import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { userStore } from '../../container/user/store';
import NavigationBar from '../../components/NavigationBar';
import {
  Divider,
  EmailText,
  ItemButtonRow,
  LoginButton,
  LogoutButton,
  MyInfoLayout,
  MyPagePage,
  MyPageContainer,
  NeedSignInText,
  SignUpButton,
  WelcomeTitle,
} from './style';
import TopHeader from '../../components/TopHeader';

const MyPage = observer(() => {
  const history = useHistory();
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    setDataReady(false)
    userStore.fetchProfile().then(() => {
      setDataReady(true)
    })
  }, []);

  const onClickLogout = () => {
    if (!confirm('로그아웃하시겠습니까?')) return;
    if (!userStore.logOut()) return;
    alert('정상적으로 로그아웃되었습니다.');
    history.replace('/');
  };

  return (
    <MyPagePage>
      <TopHeader pageName="마이페이지" />
      {!dataReady ?
        <div>로딩중입니다...</div> :
        <MyPageContainer>
          <MyInfoLayout>
            {userStore.profile ? (
              <WelcomeTitle>
                안녕하세요, <b>{userStore.profile.nickname}</b>님!
              </WelcomeTitle>
            ) : (
              <NeedSignInText>
                지금 회원가입하고, 나누기와 함께
                <br/>
                <u>
                  <b>친환경 공유소비 생활</b>
                </u>
                을 즐겨보아요!
              </NeedSignInText>
            )}
            {userStore.profile && <EmailText>{userStore.profile.uid}</EmailText>}
            <div>
              {userStore.profile ? (
                <>
                  <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
                  <SignUpButton onClick={() => history.push('/signup')}>
                    회원가입
                  </SignUpButton>
                </>
              ) : (
                <>
                  <LoginButton onClick={() => history.push('/login')}>
                    로그인
                  </LoginButton>
                  <SignUpButton onClick={() => history.push('/signup')}>
                    회원가입
                  </SignUpButton>
                </>
              )}
            </div>
          </MyInfoLayout>
          <Divider/>
          <ItemButtonRow onClick={() => history.push('/mypage/edit')}>
            계정 정보 관리
          </ItemButtonRow>
          <Divider/>
          <ItemButtonRow onClick={() => history.push('/mypage/posts')}>
            나의 나누기
          </ItemButtonRow>
          <Divider/>
          <ItemButtonRow onClick={() => history.push('/mypage/favs')}>
            관심목록
          </ItemButtonRow>
          <Divider/>
          <ItemButtonRow onClick={() => history.push('/cs')}>
            문의하기
          </ItemButtonRow>
          <Divider/>
          <ItemButtonRow onClick={() => history.push('/policies')}>
            이용약관
          </ItemButtonRow>
          <NavigationBar currnetUrl="mypage"/>
        </MyPageContainer>
      }
    </MyPagePage>
  );
});

export default MyPage;
