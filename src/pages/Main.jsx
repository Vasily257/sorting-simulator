import React from 'react';

import Header from '../components/HeaderPackage/Header/Header';
import Content from '../components/Content/Content';
import Promo from '../components/Promo/Promo';
import History from '../components/History/History';
import About from '../components/About/About';

function Main() {
  return (
    <>
      <Header />
      <Content>
        <Promo />
        <About />
        <History />
      </Content>
    </>
  );
}

export default Main;
