import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'uppy/lib/plugins/Webcam';
import 'uppy/dist/uppy.css';
import uppy from '../util/uppy';


class Uppy extends Component {

    static propTypes = {
        uppy: PropTypes.object.isRequired
    }

    static defaultProps = {
        uppy
    }

    constructor(props) {
        super(props);

        this._ref = this._ref.bind(this);
    }

    componentDidMount() {
        const { uppy } = this.props;

        uppy.use(Webcam, {
            target: this._target,
            mirror: false
        });
    }

    _ref(target) {
        this._target = target;
    }

    render() {
        return (<div ref={this._ref}></div>);
    }
}

export default Uppy;