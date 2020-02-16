import React, { Component } from 'react'
import withCounter from '../hoc/withCounter';

class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h3 onMouseOver = {incrementCount}>Hoverd: {count} times</h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 5);
