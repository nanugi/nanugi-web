import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import { createPost } from '../../container/post';

import {
  PostWritePage,
  CancelBtn,
  PostWriteBox,
  PostInfoBox,
  InputImage,
  InputBox,
  Input,
  WriteBtn,
} from './style';

function PostWrite() {
  const [postField, setPostField] = useState({
    title: '',
    content: '',
    totalPrice: '',
    nanumPrice: '',
    minParti: '',
    maxParti: '',
    chatUrl: '',
  });

  const {
    title,
    content,
    totalPrice,
    nanumPrice,
    minParti,
    maxParti,
    chatUrl,
  } = postField;

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPostField({
      ...postField,
      [name]: value,
    });
  };

  const onClickWriteBtn = async function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const target = e.currentTarget;
    target.disabled = true;
    target.classList.add('on');

    const res = await createPost({
      title,
      content,
      totalPrice: Number(totalPrice),
      nanumPrice: Number(nanumPrice),
      minParti: Number(minParti),
      maxParti: Number(maxParti),
      chatUrl,
    });

    if (res?.success === false) {
      alert(res.msg);
      return;
    }

    setPostField({
      title: '',
      content: '',
      totalPrice: '',
      nanumPrice: '',
      minParti: '',
      maxParti: '',
      chatUrl: '',
    });

    target.disabled = false;
    target.classList.remove('on');

    alert(res?.msg);
    history.push('/main');
  };

  return (
    <PostWritePage>
      <PostWriteBox>
        <CancelBtn onClick={() => history.push('/main')}>뒤로가기</CancelBtn>
        <PostInfoBox>
          <InputImage onClick={() => alert('...')}>이미지 업로드</InputImage>
          <InputBox>
            <Input
              name="title"
              placeholder="제목"
              value={title}
              onChange={changeState}
            />
            <Input
              name="content"
              placeholder="내용"
              value={content}
              onChange={changeState}
              style={{ height: '90px' }}
            />
            <Input
              name="totalPrice"
              placeholder="총 가격"
              value={totalPrice}
              onChange={changeState}
            />
            <Input
              name="nanumPrice"
              placeholder="나눔가"
              value={nanumPrice}
              onChange={changeState}
            />
            <Input
              name="minParti"
              placeholder="최소인원"
              value={minParti}
              onChange={changeState}
            />
            <Input
              name="maxParti"
              placeholder="최대인원"
              value={maxParti}
              onChange={changeState}
            />
            <Input
              name="chatUrl"
              placeholder="체팅방 링크"
              value={chatUrl}
              onChange={changeState}
            />
          </InputBox>
        </PostInfoBox>
        <WriteBtn type="button" onClick={onClickWriteBtn}>
          나누기 개설
        </WriteBtn>
      </PostWriteBox>
    </PostWritePage>
  );
}

export default PostWrite;
