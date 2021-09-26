import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Compose = () => {
  return (
    <Wrapper>
      <AddIcon fontSize="large" />
      <p>Compose</p>
    </Wrapper>
  );
};

export default Compose;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  width: auto;
  background-color: orange;
  align-items: center;
  padding: 6px 32px 6px 8px;
  border-radius: 24px;
  color: #3c4043;
  cursor: pointer;
  font-weight: 500;
  height: 48px;
  min-width: 56px;
  overflow: hidden;
  padding: 0 24px 0 0;
  text-transform: none;
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  font-family: 'Google Sans', Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fff;
  background-image: none;
  /* margin: 10px; */
  :hover {
    box-shadow: 0 1px 5px 5px rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;
