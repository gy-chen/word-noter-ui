import _ from 'lodash';
import { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * WebSocket Component
 *
 * This component will try to connect when the component did mount and close connection when the component unmount.
 *
 * Props:
 *   - url: target url
 *   - onmessage: callback that when receive message, the callback argument will filled by data (event.data).
 *
 * Methods:
 *   - send: send message through WebSocketComponent connection
 */
class WebSocketComponent extends Component {

    constructor(props) {
        super(props);

        this._websocket = null;

        this._onmessage = this._onmessage.bind(this);
        this._onerror = this._onerror.bind(this);
        this._onclose = this._onclose.bind(this);
    }

    componentDidMount() {
        const { url } = this.props;
        this._websocket = new WebSocket(url);
        this._websocket.onmessage = this._onmessage;
        this._websocket.onerror = this._onerror;
        this._websocket.onclose = this._onclose;
    }

    componentWillUnmount() {
        this._websocket.close();
    }

    send(message) {
        this._websocket.send(message);
    }

    close() {
        this._websocket.close();
    }

    _onmessage(e) {
        const { onmessage } = this.props;
        onmessage(e.data);
    }

    _onerror(e) {
        _.invoke(this.props, 'onerror', e);
    }

    _onclose(e) {
        _.invoke(this.props, 'onclose', e);
    }

    render() {
        return null;
    }


}

WebSocketComponent.propTypes = {
    url: PropTypes.string.isRequired,
    onmessage: PropTypes.func.isRequired,
    onerror: PropTypes.func,
    onclose: PropTypes.func
}

export default WebSocketComponent;
