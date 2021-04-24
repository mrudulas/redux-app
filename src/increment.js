import React from 'react';

export default class SecondClass extends React.Component {
constructor() {

}
state = {
    count : 0
}
decrement = () => {
    this.setState({count : --this.state.count })
}

render() {
    return (
        <div>
            My number is {this.state.count}
            <button onClick={this.decrement}>Dec</button>
        </div>
    )
}
}