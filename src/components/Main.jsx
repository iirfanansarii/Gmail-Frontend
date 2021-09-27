import React from 'react';
import styled from 'styled-components';
import { Sidebar, EmailsView, SideIcons } from '.';

const Main = (props) => {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
      {/* <SideIcons /> */}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;
