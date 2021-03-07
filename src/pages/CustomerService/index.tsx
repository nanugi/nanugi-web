import React from 'react'
import { Box, Button, Container, Divider, TextField, Typography } from '@material-ui/core'

function CustomerServicePage() {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h6'>
        고객문의
      </Typography>
      <Typography variant='subtitle2'>
        문의할 내용을 입력해 보내주세요.
      </Typography>
      <Divider />
      <Box>
        <TextField
          multiline
          rows={4}
          placeholder='문의 내용을 입력해주세요.'
          fullWidth
          variant='outlined'
        />
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            if (confirm('해당 내용으로 문의를 보낼까요?')) {
              // TODO: 문의 보내기
            }
          }}
        >
          보내기
        </Button>
      </Box>
    </Container>
  )
}

export default CustomerServicePage