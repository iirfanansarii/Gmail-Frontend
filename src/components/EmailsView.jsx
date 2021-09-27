import React from 'react';
import styled from 'styled-components';
import EmailItem from './EmailItem';
import { useHistory } from 'react-router';
import pagePath from '../constants/pagePath';

const EmailsView = () => {
  const history = useHistory();

  const handleMail = (mailId) => {
    history.push(pagePath.singleMail);
  };
  return (
    <Wrrapper>
      <EmailsContainer onClick={() => handleMail()}>
        {emailData.map(
          ({ id, starred, from, subject, message, received, read }, index) => (
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

const EmailsContainer = styled.div``;

const emailData = [
  {
    id: 1,
    starred: true,
    from: 'User1',
    subject: 'Greetings',
    message: 'Happy birthday bro',
    received: '11:59',
    read: true,
  },
  {
    id: 2,
    starred: false,
    from: 'User2',
    subject: 'Teabreak',
    message: 'Sunday is not for work',
    received: '6:30',
    read: false,
  },
  {
    id: 3,
    starred: true,
    from: 'User3',
    subject: 'JS',
    message: 'Material UI is better than styled components',
    received: '7:20',
    read: false,
  },
  {
    id: 4,
    starred: true,
    from: 'User1',
    subject: 'Greetings',
    message: 'Happy birthday bro',
    received: '11:59',
    read: true,
  },
  {
    id: 5,
    starred: false,
    from: 'User2',
    subject: 'Teabreak',
    message: 'Sunday is not for work',
    received: '6:30',
    read: false,
  },
  {
    id: 6,
    starred: true,
    from: 'User3',
    subject: 'JS',
    message: 'Material UI is better than styled components',
    received: '7:20',
    read: false,
  },
  {
    id: 7,
    starred: true,
    from: 'User1',
    subject: 'Greetings',
    message: 'Happy birthday bro',
    received: '11:59',
    read: true,
  },
];
