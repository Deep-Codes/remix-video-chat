import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import styles from '~/styles/global.css';
import Live from '~/components/Live';

interface ResponseType {
  error: null | string;
  token: null | string;
}

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const loader: LoaderFunction = async ({ params }: any) => {
  const endPoint = process.env.HMS_TOKEN_ENDPOINT;
  const data: ResponseType = {
    token: null,
    error: null,
  };
  const slug = params['*'];
  const url = slug?.split('/');
  if (url?.length === 2) {
    try {
      const response = await fetch(`${endPoint}api/token`, {
        method: 'POST',
        body: JSON.stringify({
          room_id: url[0],
          role: url[1],
        }),
      });
      if (!response.ok) {
        let error = new Error('Request failed!');
        throw error;
      }
      const { token } = await response.json();
      data['token'] = token;
    } catch (error) {
      data['error'] = 'Make sure the RoomId exists in 100ms dashboard';
    }
  } else {
    data['error'] = 'Join via /:roomId/:role format';
  }
  return data;
};

export default function MeetingSlug() {
  const { token, error } = useLoaderData<ResponseType>();
  return (
    <div>
      {!(token || error) ? <h1>Loading...</h1> : null}
      {token ? <Live token={token} /> : null}
      {error ? (
        <div className='error'>
          <h1>Error</h1>
          <p>{error}</p>
          <p>
            Get RoomId from{' '}
            <a href='https://dashboard.100ms.live/rooms'>here</a> and join with
            the role created in it :)
          </p>
        </div>
      ) : null}
    </div>
  );
}
