import React from 'react';

import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Promo from '../components/Promo/Promo';

function Main() {
  return (
    <>
      <Header />
      <Content>
        <Promo />
      </Content>
    </>
  );
}

export default Main;
