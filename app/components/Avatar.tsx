import React from 'react';

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = getInitials(name);
  return <span className='avatar'>{initials}</span>;
};

// @see https://stackoverflow.com/questions/33076177/getting-name-initials-using-js
const getInitials = (name: string) => {
  const allNames = name.trim().split(' ');
  const initials = allNames.reduce((acc, curr, index) => {
    if (index === 0 || index === allNames.length - 1) {
      acc = `${acc}${curr.charAt(0).toUpperCase()}`;
    }
    return acc;
  }, '');
  return initials;
};

export default Avatar;
