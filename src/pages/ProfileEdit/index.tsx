import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { userStore } from '../../container/user/store'
import { fetchProfile, updateProfile } from '../../container/user'

const ProfileEditPage = observer(() => {
  const history = useHistory()
  const [newName, setNewName] = useState('')

  return (
    <Container maxWidth='sm'>
      <Avatar
        alt='프로필 사진'
      >
        {userStore.profile?.name?.[0] ?? 'N'}
      </Avatar>
      <Typography>이름</Typography>
      <TextField
        value={newName}
        variant='outlined'
        size='small'
        placeholder={userStore.profile?.name ?? '(이름 없음)'}
        onChange={({ currentTarget }) => setNewName(currentTarget.value)}
      />
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
    </Container>
  )
})

export default ProfileEditPage
