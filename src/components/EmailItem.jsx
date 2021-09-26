import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const EmailItem = (props) => {
  const { starred, from, subject, message, received, read } = props;
  const [star, setStar] = useState(starred);
  const [check, setCheckbox] = useState(false);

  const handleStar = () => {
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  const handleCheck = () => {
    if (check) {
      setCheckbox(false);
    } else {
      setCheckbox(true);
    }
  };

  return (
    <Wrapper>
      <IconButton onClick={handleCheck}>
        {check ? (
          <CheckBoxIcon />
        ) : (
          <CheckBoxOutlineBlankIcon htmlColor="lightgray" />
        )}
      </IconButton>

      <IconButton onClick={handleStar}>
        {star ? <StarIcon htmlColor="#f7cb69" /> : <StarBorderIcon />}
      </IconButton>
      <p className={!read && 'unread'}>{from}</p>
      <div>
        <p className={!read && 'unread'}>{subject}</p>{' '}
        <p>
          -<span>{message}</span>
        </p>
      </div>
      <p className={!read && 'unread'}>{received}</p>
    </Wrapper>
  );
};

export default EmailItem;
const Wrapper = styled.div`
  padding-left: 20px;
  border-top: 1px solid lightgray;
  display: grid;
  grid-template-columns: min-content min-content 120px auto min-content;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  div {
    display: flex;
    span {
      color: darkgray;
      font-weight: bolder;
    }
  }
  .unread {
    color: black;
    font-weight: bolder;
  }
`;
