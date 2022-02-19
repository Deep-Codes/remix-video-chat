import React from 'react';
import {
  HMSPeer,
  selectIsPeerAudioEnabled,
  selectIsPeerVideoEnabled,
  selectPeers,
  useHMSStore,
  useVideo,
} from '@100mslive/react-sdk';
import Avatar from './Avatar';
import { MicOffIcon, MicOnIcon } from '@100mslive/react-icons';

const Conference = () => {
  const peers = useHMSStore(selectPeers);
  return (
    <main>
      {peers.map((peer) => (
        <Peer key={peer.id} peer={peer} />
      ))}
    </main>
  );
};

const Peer: React.FC<{ peer: HMSPeer }> = ({ peer }) => {
  const isAudioOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  const isVideoOn = useHMSStore(selectIsPeerVideoEnabled(peer.id));
  return (
    <div className='tile'>
      {!isVideoOn ? <Avatar name={peer.name} /> : null}
      <span className='name'>{peer.name}</span>
      <Video mirror={peer.isLocal} videoTrack={peer.videoTrack} />
      <span className='audio'>
        {!isAudioOn ? <MicOffIcon /> : <MicOnIcon />}
      </span>
    </div>
  );
};

const Video = ({ videoTrack, mirror }: any) => {
  const ref = useVideo(videoTrack);
  return (
    <video
      className={mirror ? 'mirror' : ''}
      ref={ref}
      autoPlay
      muted
      playsInline
    />
  );
};

export default Conference;
