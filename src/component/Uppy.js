import React from 'react';
import Dashboard from 'uppy/lib/react/Dashboard';
import uppy from '../util/uppy';
import 'uppy/dist/uppy.css';

// TODO just test , use WebCam later
const Uppy = () => <Dashboard uppy={uppy} />;

export default Uppy;