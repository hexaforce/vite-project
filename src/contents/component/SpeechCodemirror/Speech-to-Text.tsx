import { SpeechRecognition } from './SpeechRecognition'
import SiriWave from 'siriwave'
import { h } from 'preact'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const _SpeechRecognition = (window as any).SpeechRecognition ?? ((window as any).webkitSpeechRecognition as SpeechRecognition)

export default function SpeechToText(props: any) {
  const { mic, setRecognitionText } = props

  const recognitionRef = useRef<SpeechRecognition>()
  const isSupportedSpeechRecognition = useMemo(() => typeof _SpeechRecognition !== 'undefined', [])
  const [text, setText] = useState('')

  useEffect(() => {
    const _recognition: SpeechRecognition = new _SpeechRecognition()
    // _recognition.grammars = ''
    _recognition.lang = 'ja-JP'
    _recognition.continuous = true
    _recognition.interimResults = true
    // _recognition.maxAlternatives = 1
    // _recognition.serviceURI = ''

    _recognition.onaudiostart = () => console.info('[speech] on audio start')
    _recognition.onaudioend = () => console.info('[speech] on audio end')
    _recognition.onend = () => console.info('[speech] on end')
    _recognition.onerror = (event) => console.error('[speech] on error' + event.error)
    _recognition.onnomatch = () => console.info('[speech] on nomatch')
    _recognition.onresult = (event) => {
      const results = Array.from(event.results)
      const lastResult = results[results.length - 1]
      if (lastResult.isFinal) {
        setRecognitionText(lastResult[0].transcript)
        setText('')
      } else {
        const restResults = results.slice(event.resultIndex)
        const processingResults = restResults.filter((result) => !result.isFinal)
        const processingText = processingResults.map((result) => result[0].transcript).join('')
        setText(processingText)
      }
    }
    _recognition.onsoundstart = () => console.info('[speech] on sound start')
    _recognition.onsoundend = () => console.info('[speech] on sound end')
    _recognition.onspeechstart = () => console.info('[speech] on speech start')
    _recognition.onspeechend = () => console.info('[speech] on speech end')
    _recognition.onstart = () => console.info('[speech] on start')

    recognitionRef.current = _recognition
    return () => {
      _recognition.stop()
    }
  }, [])

  const [siriWave, setSiriWave] = useState<SiriWave>()
  const siriWaveRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (mic) {
      if (!siriWaveRef.current || siriWave) return
      setSiriWave(new SiriWave({ container: siriWaveRef.current, style: 'ios9', width: 380, height: 70 }))
      recognitionRef.current?.start()
    } else {
      setSiriWave(undefined)
      recognitionRef.current?.stop()
    }
  }, [mic])

  // const [punctuation, setPunctuation] = useState(true)
  // const [newline, setNewline] = useState(true)

  return (
    <Stack spacing={1} direction='column' sx={{ bgcolor: '#202020' }}>
      {mic && (
        <Box sx={{ typography: 'body1', color: 'whitesmoke' }}>
          {/* 
          <FormGroup row>
            <SettingSwitch label='自動句読点' checked={punctuation} setChecked={setPunctuation} />
            <SettingSwitch label='自動改行' checked={newline} setChecked={setNewline} />
          </FormGroup> 
          */}
          {isSupportedSpeechRecognition ? text : 'Your browser does not support SpeechRecognition API.'}
          <div ref={siriWaveRef} />
        </Box>
      )}
    </Stack>
  )
}
