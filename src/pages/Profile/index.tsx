import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProfilePage, ProfileUserNameText } from './style'
import TopHeader from "../../components/TopHeader";
import { getUser } from "../../container/user";

function Profile() {
  const { nickname: userName } = useParams<{ nickname: string }>()

  useEffect(() => {
    getUser(userName)
      .then()
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
