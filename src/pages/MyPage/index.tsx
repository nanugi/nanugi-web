import React, { useEffect } from 'react'
import {
  Avatar,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import LogOutIcon from '@material-ui/icons/ExitToApp'
import ResignIcon from '@material-ui/icons/MeetingRoom'
import { useHistory } from 'react-router-dom'
import { userStore } from '../../container/user/store'
import { fetchProfile, logOut, resignUser } from '../../container/user'

const MyPage = observer(() => {
  const history = useHistory()

  useEffect(() => {
    fetchProfile().then((p) => {
      userStore.profile = p?.data ?? null
    })
  }, [])

  return (
    <Container maxWidth='sm'>
      <Grid container spacing={1} alignItems='center'>
        <Grid item>
          <Avatar>{userStore.profile?.name?.[0] ?? 'N'}</Avatar>
        </Grid>
        <Grid item>
          <Typography variant='h6'>
            {userStore.profile?.uid ?? '(알 수 없음)'}
          </Typography>
          <Typography variant='subtitle1'>
            {userStore.profile?.name ?? '(알 수 없음)'} 님 반갑습니다
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} aria-colcount={3} justify='center'>
        <Grid item justify='center'>
          <Avatar>
            1
          </Avatar>
          <Typography variant='subtitle2'>나눔 내역</Typography>
        </Grid>
        <Grid item justify='center'>
          <Avatar>
            2
          </Avatar>
          <Typography variant='subtitle2'>참여 내역</Typography>
        </Grid>
        <Grid item justify='center'>
          <Avatar>
            3
          </Avatar>
          <Typography variant='subtitle2' align='center'>관심 목록</Typography>
        </Grid>
      </Grid>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MyLocationIcon />
        </ListItemIcon>
        <ListItemText primary='내 동네 설정' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary='키워드 알림' />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => history.push('/policies')}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary='이용약관' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary='자주 묻는 질문' />
      </ListItem>
      <ListItem
        button
        onClick={() => history.push('/cs')}
      >
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary='1:1 문의' />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => {
          if (confirm('로그아웃하시겠습니까?')) {
            logOut()
            alert('정상적으로 로그아웃되었습니다.')
            history.replace('/')
          }
        }}
      >
        <ListItemIcon>
          <LogOutIcon />
        </ListItemIcon>
        <ListItemText primary='로그아웃' />
      </ListItem>
      <ListItem
        button
        onClick={async () => {
          if (confirm('정말 회원탈퇴하시겠습니까?')) {
            try {
              const res = await resignUser()
              if (res?.success) {
                alert('회원탈퇴하였습니다. 홈으로 돌아갑니다.')
                history.replace('/')
              }
            } catch (e) {
              alert(e)
            }
          }
        }}
      >
        <ListItemIcon>
          <ResignIcon />
        </ListItemIcon>
        <ListItemText primary='회원탈퇴' />
      </ListItem>
    </Container>
  )
})

export default MyPage
