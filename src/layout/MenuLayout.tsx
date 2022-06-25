import DrawerMenu from './DrawerMenu'
import HeadAppBar from './HeadAppBar'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Copyright from '@/contents/component/Copyright'

const mdTheme = createTheme()

export default function App({ children, path }: { children: JSX.Element; path: string }) {
  const [open, setOpen] = useState(false)

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeadAppBar open={open} setOpen={setOpen} />
        <DrawerMenu open={open} setOpen={setOpen} />
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            {children}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
