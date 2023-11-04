function List(){
    const arr=['html','css','js','react'];
    // const li =arr.map((el)=>{
    //     return <li>{el +"-----"}</li>
    // })
    // console.log(li);
    return(
<ul>
    {/* <li>{li[0]}</li>
    <li>{li[1]}</li>
    <li>{li[2]}</li> */}
    {/* {li} */}

   { arr.map((el,index) => <li key={index}> {el +"-----"} </li>) }
</ul>
    );
}

export default List;