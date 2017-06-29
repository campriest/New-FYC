import React from 'react';

import SocketIOClient from 'socket.io-client';

export default class Newsocket extends React.Component{

  constructor(props) {
     super(props);

     // Creating the socket-client instance will automatically connect to the server.
     this.socket = SocketIOClient('http://localhost:3000');
   }

}
