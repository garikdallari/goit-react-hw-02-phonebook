import React from 'react';
import { SecondaryTitle } from './Title.styled';

function Title({ text, size }) {
  return <SecondaryTitle size={size}>{text}</SecondaryTitle>;
}

export default Title;
