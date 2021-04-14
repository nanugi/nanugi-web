import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { userStore } from '../../container/user/store'
import { fetchProfile, resignUser, updateProfile } from '../../container/user'
import TopHeader from '../../components/TopHeader'
import { LinkBox, ProfileEditPagePage, SignOutText } from './style'
import { Button, Input } from '../common'

const ProfileEditPage = observer(() => {
  const history = useHistory()
  const [newName, setNewName] = useState('')

  useEffect(() => {
    userStore.fetchProfile().then()
  }, [])

  return (
    <ProfileEditPagePage>
      <TopHeader pageName='계정정보 관리' />
      <Input
        style={{
          width: '90%',
          marginLeft: '5%',
          marginTop: 25
        }}
        name="email"
        value={userStore.profile?.uid ?? '(알 수 없음)'}
        disabled
      />
      <Input
        style={{
          width: '90%',
          marginLeft: '5%'
        }}
        name="name"
        placeholder={userStore.profile?.nickname ?? '(알 수 없음)'}
        value={newName}
        onChange={({ currentTarget }) => setNewName(currentTarget.value)}
      />
      <Button
        style={{
          width: '90%',
          marginLeft: '5%'
        }}
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
        변경 완료
      </Button>
      <LinkBox>
        <SignOutText
          onClick={async () => {
            if (!confirm('정말 회원탈퇴하시겠습니까?')) return;
            try {
              const res = await resignUser();
              if (!res?.success) return;
              alert('회원탈퇴하였습니다. 홈으로 돌아갑니다.');
              history.replace('/');
            } catch (e) {
              alert(e);
            }
          }}
        >
          회원탈퇴
        </SignOutText>
      </LinkBox>
    </ProfileEditPagePage>
  )
})

export default ProfileEditPage
