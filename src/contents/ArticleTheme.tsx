import { route } from 'preact-router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Title from '@/contents/component/Title'
import { Fragment, h } from 'preact'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

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
    <Box component='form' onSubmit={handleSubmit}>

      <Card sx={{ p: 2 }}>
        <Title>記事についての内容を決定</Title>

        <Grid container spacing={3}>

          <Grid mt={3} item xs={12}>
            <Typography>1.記事のテーマを選択</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth variant='standard' select id='ArticleTheme' name='ArticleTheme' required autoFocus >
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
            <TextField fullWidth variant='standard' select id='ArticleGenre' name='ArticleGenre' >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant='standard' select id='ArticleDetail' name='ArticleDetail'  >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant='standard' select id='ArticleEmotions' name='ArticleEmotions' >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth variant='standard' select id='ArticleStory' name='ArticleStory'  >
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
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Button type='submit' variant='contained' >
                作成する
              </Button>
            </Stack>
          </Grid>

        </Grid>
      </Card>
    </Box >
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
];
