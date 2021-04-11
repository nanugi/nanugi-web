import React, { useMemo, useRef, useState } from 'react';

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
  const [imageFormField, setImageFormField] = useState<(File | number)[]>([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string[]>([]);
  const imageInputRef = useRef({} as HTMLInputElement);

  const CurrentImageList = useMemo(
    () =>
      imagePreviewUrl.map((url, key) => (
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
      )),
    [imageFormField, imagePreviewUrl],
  );

  const AddImageBtn = useMemo(
    () => (
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
          multiple
          accept="image/*"
          onChange={async (e) => {
            if (e.target.files) {
              const _files = Array.from(e.target.files);

              _files.slice(0, maxSize - imageFormField.length);

              const readAsDataURL = (file: File) =>
                new Promise<string>((resolve, reject) => {
                  const fr = new FileReader();
                  fr.onerror = reject;
                  fr.onload = function () {
                    resolve(String(fr.result));
                  };
                  fr.readAsDataURL(file);
                });

              const _filesURL = await Promise.all<string>(
                _files.map(readAsDataURL),
              );

              setImagePreviewUrl([..._filesURL, ...imagePreviewUrl]);
              setImageFormField([..._files, ...imageFormField]);
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
    ),
    [imageFormField, imagePreviewUrl, maxSize],
  );

  const FormComponent = useMemo(
    () => (
      <div
        style={{
          marginBottom: '19px',
          width: '100%',
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
        }}
      >
        {AddImageBtn}
        {CurrentImageList}
      </div>
    ),
    [AddImageBtn, CurrentImageList],
  );

  return {
    FormComponent,
    imageFormField,
    setImageFormField,
    setImagePreviewUrl,
  };
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
