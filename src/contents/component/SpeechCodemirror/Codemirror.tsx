import SpeechToText from './Speech-to-Text'
import { h } from 'preact'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import { cursorDocEnd, cursorLineDown, defaultKeymap } from '@codemirror/commands'
import { EditorState, Text } from '@codemirror/state'
import { EditorView, highlightActiveLine, keymap, placeholder } from '@codemirror/view'

export default function Codemirror(props: any) {
  const { mic, setMic, doc, setDoc, insertText, setInsertText, editorFixHeight } = props

  const divRef = useRef<HTMLDivElement>(null)
  const editorViewRef = useRef<EditorView>()

  const handleMic = () => {
    setMic(!mic)
  }

  const updateListenerExtension = useCallback(() => {
    return EditorView.updateListener.of((update) => {
      if (editorViewRef.current) {
        setDoc(editorViewRef.current.state.doc)
      }
    })
  }, [])

  // const conversation = useSelector((state: any) => state.conversation)
  const editorState = EditorState.create({
    doc: '', //index == swipeIndex && conversation.currentArticle.answer.length > index ? conversation.currentArticle.answer[index] : '',
    extensions: [
      keymap.of(defaultKeymap),
      highlightActiveLine(),
      updateListenerExtension(),
      EditorView.theme({
        '&': { maxHeight: editorFixHeight + 'px' },
        '.cm-gutter,.cm-content': { minHeight: editorFixHeight + 'px' },
        '.cm-scroller': { overflow: 'auto', outline: '1px solid gainsboro' },
      }),
      placeholder(`こちらに入力してください。`),
    ],
  })

  useEffect(() => {
    if (divRef.current) {
      const editorView = new EditorView({
        state: editorState,
        parent: divRef.current,
      })
      cursorDocEnd(editorView)
      editorView.focus()
      editorViewRef.current = editorView
      return () => {
        editorView.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (insertText != '') {
      if (editorViewRef.current) {
        editorViewRef.current.focus()
        const transaction = editorViewRef.current.state.update({
          changes: {
            from: editorViewRef.current.state.selection.ranges[0].to,
            insert: insertText,
          },
        })
        editorViewRef.current.dispatch(transaction)
        cursorLineDown(editorViewRef.current)
      }
      setInsertText('')
    }
  }, [insertText])

  return (
    <Stack spacing={1}>
      <Box sx={{ width: 600, height: editorFixHeight + 2, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <div ref={divRef} />
        <Avatar sx={{ position: 'absolute', bottom: 20, right: 20, width: 56, height: 56, bgcolor: mic ? 'red' : 'dodgerblue' }} onClick={handleMic}>
          {mic ? <MicOffIcon /> : <MicIcon />}
        </Avatar>
      </Box>
      {doc && doc.length}文字
      <SpeechToText mic={mic} setRecognitionText={setInsertText} />
    </Stack>
  )
}
