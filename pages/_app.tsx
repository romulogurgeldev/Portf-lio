import '../styles/globals.css';

interface PageProps {
  title: string;
  content: string;
}

interface MyAppProps<P extends PageProps> {
  Component: React.ComponentType<P>;
  pageProps: P;
}

function MyApp<P extends PageProps>({ Component, pageProps }: MyAppProps<P>) {
  return <Component {...pageProps} />
}

export default MyApp;
