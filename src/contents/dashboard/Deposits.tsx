import Title from '@/contents/component/Title'
import { Fragment, h } from 'preact'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function preventDefault(event: any) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <Fragment>
      <Title>Recent Deposits</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </Fragment>
  )
}
