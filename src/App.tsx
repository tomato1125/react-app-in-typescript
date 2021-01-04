import React from 'react';
import CounterWithReducer  from './CounterWithReducer';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message}) => {
  // const { message } = props; /* propsのなかからmessageだけ取り出す（分割代入）*/
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, default_Props!',
}

export default App;
