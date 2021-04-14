import React from 'react'
import { Container } from '@material-ui/core'
import TopHeader from '../../components/TopHeader'

function CustomerServicePage() {

  /* const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState('') */

  return (
    <Container maxWidth='sm'>
      <TopHeader pageName='문의하기'/>
      <div>준비중입니다...</div>
      {/* <Typography variant='h6'>
        문의하기
      </Typography>
      <Typography variant='subtitle2'>
        문의할 내용을 입력해 보내주세요.
      </Typography>
      <Divider />
      <Box>
        <TextField
          label='이메일'
          placeholder='답변을 받으실 이메일을 알려주세요.'
          fullWidth
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          variant='outlined'
          helperText='ex) reply@gmail.com'
        />
        <TextField
          label='휴대폰번호'
          placeholder='답변을 받으실 휴대폰번호를 알려주세요.'
          fullWidth
          value={phone}
          onChange={({ currentTarget }) => setPhone(currentTarget.value)}
          variant='outlined'
          helperText='ex) 010-1234-1234'
        />
        <TextField
          multiline
          rows={4}
          placeholder='문의 내용을 입력해주세요.'
          fullWidth
          variant='outlined'
          value={content}
          onChange={({ currentTarget }) => setContent(currentTarget.value)}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={async () => {
            if (!confirm('해당 내용으로 문의를 보낼까요?')) return
            const res = await sendCs(content, email, phone)
            if (!res?.success) {
              alert(res?.msg ?? '실패')
            } else {
              alert('문의가 접수되었습니다.')
            }
          }}
        >
          보내기
        </Button>
      </Box> */}
    </Container>
  )
}

export default CustomerServicePage
