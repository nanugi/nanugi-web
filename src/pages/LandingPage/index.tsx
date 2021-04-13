import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LandingPagePage, Page1Desc, Page1Title, Page2Title, Page3Desc, Page3Title, PageContainer, StartBtn } from './style';

import logo from './logo.png'
import mockUpImage1 from './phone_mockup1.png'
import mockUpImage2 from './phone_mockup2.png'


function Page1Content() {
  return (
    <>
      <img
        alt='logo'
        src={logo}
        width={250}
        height={84}
        style={{
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingTop: '50%',
        }}
      />
      <Page1Title>
        함께 나누는<br />친환경 소비 플랫폼
      </Page1Title>
      <Page1Desc>
        &quot;지구를 위한 착한 소비, 내 주머니에도 착한 소비&quot;
      </Page1Desc>
    </>
  )
}

function Page2Content() {
  return (
    <>
      <svg
        viewBox='0 0 402 368'
        width={402}
        height={368}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -10,
        }}
      >
        <ellipse cx={124} cy={124} rx={201} ry={184} fill='#11A656' />
      </svg>
      <Page2Title>
        <u>학교인증</u>으로<br />공유소비 신뢰도 보장
      </Page2Title>
      <img
        src={mockUpImage1}
        alt=''
        width={334}
        height={637}
        style={{
          width: Math.min((window.innerHeight - 200) * 334 / 637, 334),
          height: Math.min(window.innerHeight - 200, 637),
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      />
      <svg
        viewBox='0 0 230 210'
        width={230}
        height={210}
        style={{
          position: 'absolute',
          bottom: 36,
          right: 0,
          zIndex: -10,
        }}
      >
        <ellipse cx={165} cy={105} rx={115} ry={105} fill='#11A656' />
      </svg>
    </>
  )
}

function Page3Content() {
  const history = useHistory()
  return (
    <>
      <Page3Title>
        나눠 살 사람만 모여!
      </Page3Title>
      <img
        src={mockUpImage2}
        alt=''
        width={334}
        height={637}
        style={{
          width: Math.min((window.innerHeight - 200) * 334 / 637, 334),
          height: Math.min(window.innerHeight - 200, 637),
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      />
      <Page3Desc>
        기존의 중고거래 플랫폼과는 다른,<br /><u><b>신개념 공유소비 플랫폼</b></u>
      </Page3Desc>
      <StartBtn
        onClick={() => history.replace('/')}
      >
        나누기 시작
      </StartBtn>
    </>
  )
}

function LandingPage() {
  const [height, setHeight] = useState(window.innerHeight)

  const layoutListener = () => {
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    // window.addEventListener('scroll', scrollListener)
    window.addEventListener('change', layoutListener)
    return () => {
      // window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('change', layoutListener)
    }
  }, [])

  return (
    <LandingPagePage>
      <PageContainer height={height} color='#11A656'>
        <Page1Content />
      </PageContainer>
      <PageContainer height={height}>
        <Page2Content />
      </PageContainer>
      <PageContainer height={height}>
        <Page3Content />
      </PageContainer>
    </LandingPagePage>
  )
}

export default LandingPage;
