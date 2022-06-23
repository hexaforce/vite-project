import { h } from 'preact'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Text } from '@codemirror/state'
import Copyright from '@/contents/component/Copyright'
import Codemirror from '@/contents/component/SpeechCodemirror/Codemirror'

const theme = createTheme()

export default function Write(props: any) {
  const [doc, setDoc] = useState<Text>()
  useEffect(() => {
    if (doc && doc.length > 0) {
      const text = doc.toJSON().join('\n')
      console.log(text)
    }
  }, [doc])
  const [mic, setMic] = useState(false)
  const [addText, setAddText] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Codemirror doc={doc} setDoc={setDoc} mic={mic} setMic={setMic} addText={addText} setAddText={setAddText} editorFixHeight={320} />
        </Box>
      </Container>
    </ThemeProvider>
  )
}
