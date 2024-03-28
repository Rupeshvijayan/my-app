import React from "react";

class About extends React.Component{
    render(){
        const {userData} = this.props;
        const storeData = userData.map((e,index) =>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                </tr>
            )
        })
        return(
            // <div>
            //     <h1>Hi i am Class component</h1>
            //     <p>i am {this.props.pro}</p>
            // </div>

            <div>
                <h2>Welcome Table</h2>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </thead>
                    <tbody>
                        {storeData}    
                    </tbody>
                </table>
            </div>

        )
    }
}

export default About;