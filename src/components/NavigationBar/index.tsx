import React from 'react';
import history from '../../utils/browserHistory';

import {
  NavigationBarBox,
  NavigationBarIconBox,
  NavigationBarIcon,
  NavigationBarIconLabel,
} from './style';

import home from '../../assets/images/icon/home.png';
import divide from '../../assets/images/icon/divide.png';
import mypage from '../../assets/images/icon/mypage.png';

interface NavigationBarProps {
  currnetUrl: string;
}
function NavigationBar({ currnetUrl }: NavigationBarProps) {
  return (
    <NavigationBarBox>
      <NavigationBarIconBox
        onClick={() => currnetUrl !== 'main' && history.push('/main')}
      >
        <NavigationBarIcon icon={home} />
        <NavigationBarIconLabel className={currnetUrl === 'main' ? 'on' : ''}>
          홈
        </NavigationBarIconLabel>
      </NavigationBarIconBox>
      <NavigationBarIconBox
        onClick={() => currnetUrl !== 'divide' && history.push('/write/post')}
      >
        <NavigationBarIcon icon={divide} />
        <NavigationBarIconLabel className={currnetUrl === 'divide' ? 'on' : ''}>
          나누기 개설
        </NavigationBarIconLabel>
      </NavigationBarIconBox>
      <NavigationBarIconBox
        onClick={() => currnetUrl !== 'mypage' && history.push('/mypage')}
      >
        <NavigationBarIcon icon={mypage} />
        <NavigationBarIconLabel className={currnetUrl === 'mypage' ? 'on' : ''}>
          마이 페이지
        </NavigationBarIconLabel>
      </NavigationBarIconBox>
    </NavigationBarBox>
  );
}

export default NavigationBar;
