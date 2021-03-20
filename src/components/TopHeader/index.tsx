import React from 'react';
import history from '../../utils/browserHistory';

import { TopHeaderBox, BackBtn, PageName } from './style';

interface TopHeaderProps {
  pageName: string;
}
function TopHeader({ pageName }: TopHeaderProps) {
  return (
    <TopHeaderBox>
      <BackBtn onClick={() => history.goBack()} />
      <PageName>{pageName}</PageName>
    </TopHeaderBox>
  );
}

export default TopHeader;
