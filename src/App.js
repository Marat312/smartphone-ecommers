import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import './index.css';






function App() {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div>
     <Routes />
    {/* <Stripe/> */}
    </div>
  );
}

export default App;
