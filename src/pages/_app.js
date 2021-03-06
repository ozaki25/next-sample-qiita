import App from 'next/app';
import AuthUserProvider from 'src/contexts/AuthUserContext';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    );
  }
}

export default MyApp;
