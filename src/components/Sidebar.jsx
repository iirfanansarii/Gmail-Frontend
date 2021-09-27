import React from 'react';
import styled from 'styled-components';
import Compose from './buttons/Compose';
import { SidebarButtonItems } from './buttons/SideBarButtonItems';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { bottomIcons } from './buttons/ButtomIconsData';

const Sidebar = () => {
  return (
    <Wrapper>
      <TopSectionWrapper>
        <ComposeWraper>
          <Compose />
        </ComposeWraper>
        <SideButtonsWrapper>
          {SidebarButtonItems.map((item, index) => (
            <SidebarButtonItem key={index} >
              {item.icon}
              {item.text}
            </SidebarButtonItem>
          ))}
        </SideButtonsWrapper>
      </TopSectionWrapper>

      <BottomSectionWrapper>
        <SidebarSectionWrapper>
          <Title>Meet</Title>
          <p>
            <VideocamIcon /> New Meeting{' '}
          </p>
          <p>
            <KeyboardIcon /> Join a Meeting{' '}
          </p>
        </SidebarSectionWrapper>
        <SidebarSectionWrapper>
          <Title>Hangout</Title>
          <p>
            <AccountCircleIcon />
            Mr. Robot
          </p>
        </SidebarSectionWrapper>
        <BottomIconWrapper>
          {bottomIcons.map((item) => (
            <>{item}</>
          ))}
        </BottomIconWrapper>
      </BottomSectionWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 18%;
  border-right: 1px solid lightgray;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ComposeWraper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;
const SideButtonsWrapper = styled.div``;

const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;
  :hover {
    background-color: #f5f7f7;
  }
`;

const SidebarSectionWrapper = styled.div`
  border-top: 1px solid lightgray;
  p {
    color: gray;
    display: grid;
    grid-template-columns: 14% auto;
    padding: 5px 25px;
  }
`;
const Title = styled.div`
  padding-left: 25px;
  margin-top: 4px;
  margin-bottom: 3px;
`;

const BottomIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  border-top: 1px solid lightgray;
  .MuiSvgIcon-root {
    padding: 2px;
  }
`;

const BottomSectionWrapper = styled.div`
  margin-bottom: 30px;
`;

const TopSectionWrapper = styled.div``;
