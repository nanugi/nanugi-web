import React, { useRef, useState } from 'react';

import {
  CurrentImageBox,
  CurrentImageDelBtn,
  Image,
  AddImageBtnBox,
  AddImageBtnInfo,
  Icon,
} from './style';

import camera from '../../assets/images/icon/camera.png';

export default function useImageInputForm(maxSize: number) {
  const [imageFormField, setImageFormField] = useState<File[]>([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string[]>([]);
  const imageInputRef = useRef({} as HTMLInputElement);

  const CurrentImageList = imagePreviewUrl.map((url, key) => (
    <CurrentImageBox key={key}>
      <CurrentImageDelBtn
        onClick={() => {
          setImageFormField(
            imageFormField.filter((f) => f !== imageFormField[key]),
          );
          setImagePreviewUrl(imagePreviewUrl.filter((u) => u !== url));
        }}
      >
        ⛌
      </CurrentImageDelBtn>
      <Image url={url} />
    </CurrentImageBox>
  ));

  const AddImageBtn = (
    <AddImageBtnBox
      onClick={() => {
        if (maxSize <= imageFormField.length) {
          return;
        }
        imageInputRef.current.click();
      }}
    >
      <input
        ref={imageInputRef}
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onload = (event) => {
              if (event.target?.result) {
                setImagePreviewUrl([
                  String(event.target.result),
                  ...imagePreviewUrl,
                ]);
                setImageFormField([file, ...imageFormField]);
              }
            };
            reader.readAsDataURL(file);
          }
        }}
        style={{ display: 'none' }}
      />
      <AddImageBtnInfo>
        <Icon url={camera} />
        <div style={{ color: '#adadad' }}>
          <div
            style={{
              color: imageFormField.length ? '#11A656' : '#adadad',
              display: 'inline',
            }}
          >
            {imageFormField.length}
          </div>{' '}
          / {maxSize}
        </div>
      </AddImageBtnInfo>
    </AddImageBtnBox>
  );

  const FormComponent = (
    <div style={{ marginBottom: '19px', display: 'flex' }}>
      {AddImageBtn}
      {CurrentImageList}
    </div>
  );

  return { FormComponent, imageFormField, setImageFormField };
}
/*
const styles = StyleSheet.create({
  formComponent: {
    flexDirection: 'row',
    marginHorizontal: 27,
    overflow: 'visible',
  },
  currentImage: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 10,

    width: 100,
    height: 100,
  },
  currentImageDelBtn: {
    position: 'absolute',
    top: 0,
    right: 0,

    width: 20,
    height: 20,

    backgroundColor: '#fff',

    zIndex: 1,
  },
  addImageBtn: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 10,

    width: 100,
    height: 100,

    backgroundColor: 'rgba(0,0,0,0)',
  },
});

*/
