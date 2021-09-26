import React from 'react';
import styled from 'styled-components';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailItem from './EmailItem';

const EmailsView = () => {
  return (
    <Wrrapper>
      <TopWrapper>
        <CheckBoxIcon />
        <RefreshIcon />
        <MoreVertIcon />
      </TopWrapper>
      <EmailsContainer>
        {emailData.map(
          ({ starred, from, subject, message, received, read }, index) => (
            <EmailItem
              starred={starred}
              from={from}
              subject={subject}
              message={message}
              received={received}
              read={read}
              key={index}
            />
          )
        )}
      </EmailsContainer>
    </Wrrapper>
  );
};

export default EmailsView;

const Wrrapper = styled.div``;
const TopWrapper = styled.div`
  color: gray;
  padding-left: 20px;
  height: 30px;
  margin-top: 10px;
`;
const EmailsContainer = styled.div``;

const emailData = [
  {
    starred: true,
    from: 'User1',
    subject: 'Greetings',
    message: 'Happy birthday bro',
    received: '11:59',
    read: true,
  },
  {
    starred: false,
    from: 'User2',
    subject: 'Teabreak',
    message: 'Sunday is not for work',
    received: '6:30',
    read: false,
  },
  {
    starred: true,
    from: 'User3',
    subject: 'JS',
    message: 'Material UI is better than styled components',
    received: '7:20',
    read: false,
  },
];
