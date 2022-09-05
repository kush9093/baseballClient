import { useEffect, useRef, useState } from "react";

function Support({supportAPI}) {

    const [review,setReview] = useState();
    const textRef = useRef();
    useEffect(()=>{
       supportAPI.read().then(recv =>{
           setReview(recv.datas)
       })

    },[])
    let arr;
    if(review){
    arr = review.map((elm)=>{
        let a = new Date(elm.date);
        a.setHours(a.getHours()+9)
        a.setMinutes(a.getMinutes())
        let dated = a.toISOString()
        return <div key={elm._id}>
            <div>{dated.slice(0,10)} {dated.slice(11,16)}</div>
            <div>{elm.comment}</div>
        </div>
    })
}

    const handelSubmit = (evt)=>{
        evt.preventDefault();
        supportAPI.write(textRef.current.value).then(rec=>{
            supportAPI.read().then(recv =>{
                setReview([...recv.datas])
            })
            textRef.current.value = ""
        })

    }


    return ( <>
    <h3>KIA 타이거즈를 사랑하는 사람들</h3>
    <hr />
    <div style={{textAlign:"center"}}>
    <form onSubmit={handelSubmit}>
    <input type="text" style={{width:"90%"}} ref={textRef}></input>
    </form>
    </div>
    <hr />
        {arr}
    
    </> );
}

export default Support;