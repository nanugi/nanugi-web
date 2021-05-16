import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import history from '../../utils/browserHistory';

import { createPost, modifyPost, postType } from '../../container/post';

import TopHeader from '../../components/TopHeader';

import {
  PostWritePage,
  PostWriteForm,
  // ImageForm,
  // ImageInput,
  // Image,
  InputBox,
  Input,
  Textarea,
  WriteBtn,
  ModifyBtn,
} from './style';
import useImageInputForm from '../../components/useImageInputForm';
import { addImage, deleteImage, imageType } from '../../container/image';

function PostWrite() {
  const location =
    useLocation<{
      isModify: boolean;
      post: postType;
      images: imageType[];
    }>();
  const isModify = location.state?.isModify;

  const [postField, setPostField] = useState({
    title: '',
    content: '',
    totalPrice: '',
    minParti: '',
    chatUrl: '',
  });
  const {
    FormComponent,
    imageFormField,
    setImageFormField,
    setImagePreviewUrl,
  } = useImageInputForm(5);

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
    // console.log('createPost!!', res);

    if (res?.success) {
      // console.log('createPost!! 성공', res);
      setPostField({
        title: '',
        content: '',
        totalPrice: '',
        minParti: '',
        chatUrl: '',
      });

      if (!res?.data.post_id) {
        target.disabled = false;
        target.classList.remove('on');
        return;
      }
      const addImageRes = await Promise.all(
        imageFormField.map((image) =>
          typeof image !== 'number'
            ? addImage(res?.data.post_id, { file: image })
            : null,
        ),
      );
      // console.log('addImageRes', addImageRes);

      if (!addImageRes.map((r) => Boolean(r?.success)).includes(false)) {
        // console.log('addImageRes 성공', addImageRes);
        setImageFormField([]);

        target.disabled = false;
        target.classList.remove('on');

        alert(res?.msg);
        history.push('/main');
        return;
      }

      // console.log('addImageRes 실패', addImageRes);
      alert(JSON.stringify(addImageRes));

      target.disabled = false;
      target.classList.remove('on');
      return;
    }

    // console.log('addImageRes 실패', res);
    alert(res?.msg);

    target.disabled = false;
    target.classList.remove('on');
  };

  const onClickModifyBtn = async function (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const { post, images } = location.state;

    const target = e.currentTarget;
    target.disabled = true;
    target.classList.add('on');

    const res = await modifyPost(
      {
        title,
        content,
        totalPrice: Number(totalPrice),
        minParti: Number(minParti),
        chatUrl,
      },
      post.post_id,
    );
    // console.log('modifyPost!!', res);

    if (res?.success) {
      const addImageRes = await Promise.all(
        imageFormField.map((imageFile) =>
          typeof imageFile !== 'number'
            ? addImage(res?.data.post_id, { file: imageFile })
            : null,
        ),
      );

      const deleteImageRes = await Promise.all(
        images.map((image) =>
          imageFormField.includes(image.id) ? null : deleteImage(image.id),
        ),
      );

      // console.log('addImageRes', addImageRes);
      // console.log('deleteImageRes', deleteImageRes);

      const addImageResSuccess = !addImageRes
        .map((r) => (r === null ? true : Boolean(r?.success)))
        .includes(false);
      const deleteImageResSuccess = !deleteImageRes
        .map((r) => (r === null ? true : Boolean(r?.success)))
        .includes(false);

      // console.log(addImageResSuccess, deleteImageResSuccess);
      // 수정 성공
      if (addImageResSuccess && deleteImageResSuccess) {
        setPostField({
          title: '',
          content: '',
          totalPrice: '',
          minParti: '',
          chatUrl: '',
        });
        setImageFormField([]);

        target.disabled = false;
        target.classList.remove('on');
        alert('나누기 수정 완료!');
        history.push('/main');
        return;
      }

      // 이미지 등록 실패
      if (!addImageResSuccess) {
        alert('이미지 등록 실패!');
        target.disabled = false;
        target.classList.remove('on');
        return;
      }
      // 이미지 삭제 실패
      if (!deleteImageResSuccess) {
        alert('이미지 삭제 실패!');
        target.disabled = false;
        target.classList.remove('on');
        return;
      }
    }

    if (res?.msg) {
      alert(res?.msg);
    } else {
      alert('알수없는 오류!');
    }

    target.disabled = false;
    target.classList.remove('on');
  };

  useEffect(() => {
    // console.log('isModify 체크', isModify);
    if (isModify) {
      const { post, images } = location.state;

      setImageFormField(images.map((i) => i.id));
      setImagePreviewUrl(images.map((i) => i.url));

      setPostField({
        title: post.title,
        content: post.content,
        totalPrice: String(post.detail.totalPrice),
        minParti: String(post.detail.minParti),
        chatUrl: post.detail.chatUrl,
      });
    }
  }, [isModify, location, setImageFormField, setImagePreviewUrl]);

  return (
    <PostWritePage>
      <TopHeader pageName="나누기 개설" />
      <PostWriteForm>
        {FormComponent}
        {/* <ImageForm>
          <ImageInput />
          <Image />
          <Image />
        </ImageForm> */}

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
        {isModify ? (
          <ModifyBtn type="button" onClick={onClickModifyBtn}>
            나누기 수정 완료
          </ModifyBtn>
        ) : (
          <WriteBtn type="button" onClick={onClickWriteBtn}>
            나누기 개설 완료
          </WriteBtn>
        )}
      </PostWriteForm>
    </PostWritePage>
  );
}

export default PostWrite;
