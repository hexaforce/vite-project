import { h } from 'preact'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Article(props: any) {
  return (
    <Container sx={{ py: 2 }} maxWidth='md'>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  Heading
                </Typography>
                <Typography>This is a media card. You can use this section to describe the content.</Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>View</Button>
                <Button size='small'>Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
