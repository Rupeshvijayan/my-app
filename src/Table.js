

const Table = (props) =>{   
    const {user} = props;
    const store = user.map((e,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
            </tr>
        );
    })

    return(
        <div>
            <h2>Welcome Table</h2>
            <table>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </thead>
                <tbody>
                    {store}    
                </tbody>
            </table>
        </div>
    );
}
export default Table;