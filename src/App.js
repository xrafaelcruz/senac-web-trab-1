import React from 'react'
import AppBar from 'components/AppBar'
import AppBody from 'components/AppBody'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// NotificationContainer gera erro no console estando entro de strict mode

const App = () => {
  return (
    <div className="container-fluid">
      <React.StrictMode>
        <AppBar />
        <AppBody />
      </React.StrictMode>
      
      <NotificationContainer />
    </div>
  );
}

export default App;
