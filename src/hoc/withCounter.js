import React, {Component} from 'react'

const withCounter = (WrappedComponent, counter = 1) => {
    class WithCounterComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState(prevState=>{
                return {
                    count: prevState.count + counter
                }
            })
        }

        render() {
            return(
                <WrappedComponent
                count = {this.state.count}
                incrementCount = {this.incrementCount}
                {...this.props}
                />
            );
        }
    }
    return WithCounterComponent;
}

export default withCounter;