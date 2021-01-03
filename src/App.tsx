import React from 'react';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message}) => {
  // const { message } = props; /* propsのなかからmessageだけ取り出す（分割代入）*/
  return <div>{message}</div>;
};

App.defaultProps = {
  message: 'Hello, default_Props!',
}

export default App;
