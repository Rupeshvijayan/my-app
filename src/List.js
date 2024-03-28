
const List = (props) =>{   
    const {li} = props;
    const storeLi = li.map((e,index)=>{
        return(
            <li key={index}>
                <b>IndexNo</b> : {index+1}<br/>
                <b>Name</b> : {e.name}<br/>
                <b>Age</b> : {e.age}
            </li>
        )
    })

    return(
        <ul>
            {storeLi}
        </ul>
    )
    
}    

export default List;