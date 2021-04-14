import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { userStore } from '../../container/user/store'
import { fetchProfile, resignUser, updateProfile } from '../../container/user'
import TopHeader from '../../components/TopHeader'
import { ProfileEditPagePage, SignOutText } from './style'

const ProfileEditPage = observer(() => {
  const history = useHistory()
  const [newName, setNewName] = useState('')

  return (
    <ProfileEditPagePage>
      <TopHeader pageName='계정정보 관리' />
      <Typography>이름</Typography>
      <TextField
        value={newName}
        variant='outlined'
        size='small'
        placeholder={userStore.profile?.nickname ?? '(이름 없음)'}
        onChange={({ currentTarget }) => setNewName(currentTarget.value)}
      />
      <SignOutText
        onClick={async () => {
          if (!confirm('정말 회원탈퇴하시겠습니까?')) return;
          try {
            const res = await resignUser();
            if (res?.success) return;
            alert('회원탈퇴하였습니다. 홈으로 돌아갑니다.');
            history.replace('/');
          } catch (e) {
            alert(e);
          }
        }}
      >
        회원탈퇴
      </SignOutText>
      <Button
        variant='contained'
        color='primary'
        fullWidth
        disabled={!newName}
        onClick={async () => {
          try {
            const res = await updateProfile(newName)
            if (res?.success) {
              alert('내 정보를 수정하였습니다.')
              await fetchProfile()
              history.replace('/mypage')
            } else {
              alert(res?.msg)
            }
          } catch (e) {
           alert(e)
          }
        }}
      >
        수정 완료
      </Button>
    </ProfileEditPagePage>
  )
})

export default ProfileEditPage
