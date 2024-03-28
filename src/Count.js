import React from "react";
class Count extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment = ()=>{
        this.setState({count:this.state.count +1})
    }

    decrement = ()=>{
        this.state.count > 0 ? this.setState({count: this.state.count - 1}) : this.setState({count: 0});
    }

    render(){
        return(
            <div>
                <h1>COUNT</h1>
                <h3>Count value is : {this.state.count}</h3>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default Count;