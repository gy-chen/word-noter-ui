import Uppy from 'uppy/lib/core';
// TODO need to refine my  plugin later
import SokcetIOUpload from 'uppy-plugin-socketio/src/plugin/SocketIOUploader';
import socket from './socket';

const uppy = Uppy();

uppy.use(SokcetIOUpload, {
    channel: 'image',
    io: socket
});

uppy.run();

export default uppy;