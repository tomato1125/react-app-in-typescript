import React from 'react';

interface AppProps {
  message: string;
}

const App = ({message}: { message: string }) => {
  // const { message } = props; /* propsのなかからmessageだけ取り出す（分割代入）*/
  return <div>{message}</div>;
};

export default App;
