import { h } from 'preact'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Copyright from '@/contents/component/Copyright'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()

export default function Article(props: any) {
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      {/* End hero unit */}
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12}>
            <Card sx={{ height: '100', display: 'flex', flexDirection: 'column' }}>
              {/* 
              <CardMedia
                component='img'
                // sx={{
                //   // 16:9
                //   pt: '56.25%',
                // }}
                image='https://source.unsplash.com/random'
                alt='random'
              /> 
              */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  Heading
                </Typography>
                <Typography>This is a media card. You can use this section to describe the content.</Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>プレビュー</Button>
                <Button size='small'>編集</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
