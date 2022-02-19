import styles from '~/styles/global.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return (
    <div className='home'>
      <h1>Remix Video Chat</h1>
      <p>
        Video chat app with Remix and 100ms react sdk in less than 100 lines of
        code.
      </p>
      <a href=''>Read the Blog</a>
      <a href=''>See the Code</a>
      <a href='https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDeep-Codes%2Fremix-video-chat&env=HMS_TOKEN_ENDPOINT&envDescription=Token%20endpoint%20can%20be%20found%20in%20developer%20section%20of%20100ms%20Dashboard.&envLink=https%3A%2F%2Fdashboard.100ms.live%2Fdeveloper'>
        <img src='https://vercel.com/button' alt='Deploy with Vercel' />
      </a>
    </div>
  );
}
