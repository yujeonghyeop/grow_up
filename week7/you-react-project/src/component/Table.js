import React, { useEffect, useState} from 'react';
function Table(){
    const [dorm,Setdorm]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3002/Teams')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            Setdorm(data.name)
            console.log(data)
        })
    },[])
    console.log(dorm)
    return(
        <div>{dorm}</div>
    )
}

export default Table