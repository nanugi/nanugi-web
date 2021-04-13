import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProfilePage, ProfileUserNameText } from './style'
import TopHeader from "../../components/TopHeader";
import { getUser } from "../../container/user";

function Profile() {

  const { id: userId } = useParams<{ id: string }>()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    getUser(userId)
      .then((u) => {
        setUserName(u?.data.nickname ?? '(알 수 없음)')
      })
      .catch((e) => alert(e))
  }, [])

  return (
    <ProfilePage>
      <TopHeader pageName='프로필' />
      <ProfileUserNameText><u>{userName}</u>님의 프로필</ProfileUserNameText>
    </ProfilePage>
  )
}

export default Profile