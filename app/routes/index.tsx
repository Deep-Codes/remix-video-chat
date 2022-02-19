import styles from '~/styles/global.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
