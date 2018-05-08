import io from 'socket.io-client';

// TODO read SocketIO url from enviroment variable
const socket = io('http://127.0.0.1:8080');

export default socket;