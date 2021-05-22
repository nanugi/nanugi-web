import React from 'react';

import { SpinnerBox, Bounce1, Bounce2, Bounce3 } from './style';

export default function Spinner() {
  return (
    <SpinnerBox>
      <Bounce1 />
      <Bounce2 />
      <Bounce3 />
    </SpinnerBox>
  );
}
