import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./helloWorldComponent.scss');

export default function() {
    const HelloMessage = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired
        },
        render() {
            return <div>Hello {this.props.name}</div>;
        }
    });

    ReactDOM.render(<HelloMessage name="John"/>, document.querySelector('#app'));
}