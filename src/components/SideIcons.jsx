import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const SideIcons = () => {
  return (
    <Wrapper>
      <img
        src=" https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
        alt="calendar"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
        alt="note"
      />
      <img
        src=" https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png"
        alt="task"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
        alt="contacts"
      />
      <hr />
      <IconWraper>
        <AddIcon />
      </IconWraper>
    </Wrapper>
  );
};

export default SideIcons;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 50px) 1px 50px;
  place-items: start;
  border-left: 1px solid lightgray;
  img {
    width: 100%;
    max-height: 22px;
    object-fit: contain;
    margin-top: 4px;
  }
  hr {
    width: 60%;
    color: black;
  }
`;

const IconWraper = styled.div`
  margin-top: 30px;
  margin-left: 12px;
  color: gray;
`;
