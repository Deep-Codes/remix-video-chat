import { useHMSActions } from '@100mslive/react-sdk';
import React, { useState } from 'react';

const Join: React.FC<{ token: string }> = ({ token }) => {
  const actions = useHMSActions();
  const [name, setName] = useState('');
  const joinRoom = () => {
    actions.join({
      authToken: token,
      userName: name,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom();
      }}
    >
      <h1>Join Room</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        type='text'
        placeholder='Enter Name'
        maxLength={20}
        minLength={2}
      />
      <button type='submit'>Join</button>
    </form>
  );
};

export default Join;
