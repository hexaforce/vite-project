import { Fragment, h } from 'preact'
import { route } from 'preact-router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Title from '@/contents/component/Title'
import Container from '@mui/material/Container'

export default function ThemeSelectio() {
  const handleSubmit = (event: any) => {
    const data = new FormData(event.currentTarget)
    console.log({
      ArticleTheme: data.get('ArticleTheme'),
      ArticleGenre: data.get('ArticleGenre'),
      ArticleDetail: data.get('ArticleDetail'),
      ArticleEmotions: data.get('ArticleEmotions'),
      ArticleStory: data.get('ArticleStory'),
      ArticleTitle: data.get('ArticleTitle'),
    })

    event.preventDefault()
    route('/Write', true)
  }

  return (
    <Container sx={{ py: 2 }} maxWidth='md'>
      <Box component='form' onSubmit={handleSubmit}>
        <Paper sx={{ p: 2 }}>
          <Title>記事についての内容を決定</Title>

          <Grid container spacing={3}>
            <Grid mt={3} item xs={12}>
              <Typography>1.記事のテーマを選択</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant='standard' select id='ArticleTheme' name='ArticleTheme' required autoFocus>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid mt={3} item xs={12}>
              <Typography>2.記事についての詳細を選択</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant='standard' select id='ArticleGenre' name='ArticleGenre'>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant='standard' select id='ArticleDetail' name='ArticleDetail'>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant='standard' select id='ArticleEmotions' name='ArticleEmotions'>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth variant='standard' select id='ArticleStory' name='ArticleStory'>
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid mt={3} item xs={12}>
              <Typography>3.記事のタイトルを入力</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant='standard' id='ArticleTitle' name='ArticleTitle' required />
            </Grid>

            <Grid m={3} item xs={12}>
              <Stack direction='row' justifyContent='flex-end' alignItems='center'>
                <Button type='submit' variant='contained'>
                  作成する
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

const currencies = [
  {
    value: undefined,
    label: '',
  },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]
