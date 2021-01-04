import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message}) => {
  // const { message } = props; /* propsのなかからmessageだけ取り出す（分割代入）*/
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, default_Props!',
}

export default App;
