import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  EmailResendPage,
  HomeBtn,
  ResendBtn,
  ResendText1,
  ResendText2,
  ResendText2Strong,
  ResendText3,
  ResendTextSpamHelp
} from './style'
import TopHeader from '../../components/TopHeader'
import { resendVerificationEmail } from '../../container/sign'

interface IEmailResend {
  email: string
}

function EmailResend() {
  const location = useLocation()
  const history = useHistory()
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail((location.state as IEmailResend)?.email ?? "")
  }, [])

  return (
    <EmailResendPage>
      <TopHeader pageName="인증메일 재전송" />
      <ResendText1>이메일인증이</ResendText1>
      <ResendText1 style={{ marginBottom: '36px' }}>
        완료되지 않았습니다
      </ResendText1>
      <ResendText2>
        아직 이메일을 받지 못했으면
      </ResendText2>
      <ResendText2Strong>‘{email}’</ResendText2Strong>
      <ResendText2 style={{ marginBottom: '30px' }}>
        로 다시 인증메일을 전송할까요?
      </ResendText2>
      <ResendTextSpamHelp>(메일이 오지 않았을 경우, 스팸메일함을 확인해주세요!)</ResendTextSpamHelp>
      <ResendText3 style={{ marginTop: '38px' }}>이메일 인증을 완료 후,</ResendText3>
      <ResendText3 style={{ marginBottom: '90px' }}>
        로그인을 다시 시도해주세요.
      </ResendText3>
      <ResendBtn
        type="button"
        onClick={async () => {
          if (!email) {
            alert('유효하지 않은 이메일입니다.')
            return
          }
          const res = await resendVerificationEmail({ email })
          alert(res?.success ? '인증메일을 다시 보냈습니다.' : res?.msg)
        }}
      >
        인증메일 다시 보내기
      </ResendBtn>
      <HomeBtn type="button" onClick={() => history.push('/main')}>
        홈으로 돌아가기
      </HomeBtn>
    </EmailResendPage>
  )
}

export default EmailResend
