import React from "react";
class Clsstate extends React.Component{
    constructor(){
        super()
        this.state={
            type:"Car",
            color:"Red",
            brand:"Honda",
            model:"Civic"
        }
    }

    handleChange = ()=>{
        this.setState({type:"Bike"})
        this.setState({color:"Orange"})
    }

    render(){
        return(
            <div>
                <h3>This is a {this.state.type}</h3>
                <h3>The color of the {this.state.type} is {this.state.color}</h3>
                <button onClick={this.handleChange}>Click</button>
            </div>
        )
    }
}
export default Clsstate;