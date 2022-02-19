import { selectIsConnectedToRoom, useHMSStore } from '@100mslive/react-sdk';
import React from 'react';
import Join from '~/components/Join';
import Room from '~/components/Room';

const Live: React.FC<{ token: string }> = ({ token }) => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <div>{isConnected ? <Room /> : <Join token={token} />}</div>;
};

export default Live;
