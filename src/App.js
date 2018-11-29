import React from 'react'
import Chat from './Chat'
import Auth from './Auth/Auth';

const App = (props) => (
  <div>
    <Auth >
      <Chat />
    </Auth>
  </div>
)

export default App