import React from 'react';

import { RadioBtnBox, Btn } from './style';

interface RadioBtnProps {
  children: JSX.Element;
  checked: boolean;
  onClick: () => void;
}
export default function RadioBtn({
  children,
  checked,
  onClick,
}: RadioBtnProps) {
  return (
    <RadioBtnBox>
      <Btn type="radio" checked={checked} onChange={onClick} />
      {children}
    </RadioBtnBox>
  );
}
