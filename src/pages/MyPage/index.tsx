import React, { useEffect } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import ResignIcon from '@material-ui/icons/MeetingRoom';
import { useHistory } from 'react-router-dom';
import { userStore } from '../../container/user/store';
import { resignUser } from '../../container/user';
import NavigationBar from '../../components/NavigationBar';
import {
  Divider,
  EmailText,
  ItemButtonRow,
  LoginButton,
  LogoutButton,
  MyInfoLayout,
  MyPagePage,
  NeedSignInText,
  SignUpButton,
  WelcomeTitle,
} from './style';
import TopHeader from '../../components/TopHeader';

const MyPage = observer(() => {
  const history = useHistory();

  useEffect(() => {
    // userStore.fetchProfile().then()
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
      <MyInfoLayout>
        {userStore.profile ? (
          <WelcomeTitle>
            안녕하세요, <b>{userStore.profile.nickname}</b>님!
          </WelcomeTitle>
        ) : (
          <NeedSignInText>
            지금 회원가입하고, 나누기와 함께
            <br />
            <u>
              <b>친환경 공유소비 생활</b>
            </u>
            을 즐겨보아요!
          </NeedSignInText>
        )}
        {userStore.profile && <EmailText>{userStore.profile.uid}</EmailText>}
        <div>
          {userStore.profile ? (
            <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
          ) : (
            <>
              <SignUpButton>회원가입</SignUpButton>
              <LoginButton>로그인</LoginButton>
            </>
          )}
        </div>
      </MyInfoLayout>
      <Divider />
      <ItemButtonRow>계정 정보 관리</ItemButtonRow>
      <Divider />
      <ItemButtonRow>나의 나누기</ItemButtonRow>
      <Divider />
      <ItemButtonRow>관심목록</ItemButtonRow>
      <Divider />
      <ItemButtonRow onClick={() => history.push('/cs')}>FAQ</ItemButtonRow>
      <Divider />
      <ItemButtonRow onClick={() => history.push('/policies')}>
        이용약관
      </ItemButtonRow>
      <ListItem
        button
        onClick={async () => {
          if (confirm('정말 회원탈퇴하시겠습니까?')) {
            try {
              const res = await resignUser();
              if (res?.success) {
                alert('회원탈퇴하였습니다. 홈으로 돌아갑니다.');
                history.replace('/');
              }
            } catch (e) {
              alert(e);
            }
          }
        }}
      >
        <ListItemIcon>
          <ResignIcon />
        </ListItemIcon>
        <ListItemText primary="회원탈퇴" />
      </ListItem>
      <NavigationBar currnetUrl="mypage" />
    </MyPagePage>
  );
});

export default MyPage;
