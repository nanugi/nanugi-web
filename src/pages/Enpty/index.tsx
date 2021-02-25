import React from 'react';

import { EnptyPage, ErrorCodeText, HmmText } from './style';

function Empty() {
  return (
    <EnptyPage>
      <ErrorCodeText>404</ErrorCodeText>
      <HmmText>Hmm...</HmmText>
    </EnptyPage>
  );
}

export default Empty;
