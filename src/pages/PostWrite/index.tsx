import React, { useState } from 'react';
import history from '../../utils/browserHistory';

import { createPost } from '../../container/post';

import TopHeader from '../../components/TopHeader';

import {
  PostWritePage,
  PostWriteForm,
  ImageForm,
  ImageInput,
  Image,
  InputBox,
  Input,
  Textarea,
  WriteBtn,
} from './style';

function PostWrite() {
  const [postField, setPostField] = useState({
    title: '',
    content: '',
    totalPrice: '',
    minParti: '',
    chatUrl: '',
  });

  const { title, content, totalPrice, minParti, chatUrl } = postField;

  const changeState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      minParti: Number(minParti),
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
      minParti: '',
      chatUrl: '',
    });

    target.disabled = false;
    target.classList.remove('on');

    alert(res?.msg);
    history.push('/main');
  };

  return (
    <PostWritePage>
      <TopHeader pageName="나누기 개설" />
      <PostWriteForm>
        <ImageForm>
          <ImageInput />
          <Image />
          <Image />
        </ImageForm>

        <Input
          name="title"
          placeholder="제목"
          value={title}
          onChange={changeState}
        />
        <Input
          name="chatUrl"
          placeholder="오픈채팅방 링크"
          value={chatUrl}
          onChange={changeState}
        />
        <InputBox>
          <Input
            name="totalPrice"
            placeholder="가격(원)"
            value={totalPrice}
            onChange={changeState}
          />
          <Input
            name="minParti"
            placeholder="나누기 개수(개)"
            value={minParti}
            onChange={changeState}
          />
        </InputBox>

        <Textarea
          className="content"
          name="content"
          placeholder="내용"
          value={content}
          onChange={changeState}
        />

        {/* <PostInfoBox>
          <InputImage onClick={() => alert('...')}>이미지 업로드</InputImage>
          <InputBox>
            <Input />
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
        </PostInfoBox> */}

        <WriteBtn type="button" onClick={onClickWriteBtn}>
          나누기 개설 완료
        </WriteBtn>
      </PostWriteForm>
    </PostWritePage>
  );
}

export default PostWrite;
