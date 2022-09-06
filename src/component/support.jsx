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
        return <div style={{marginLeft:"5%",marginRight:"5%"}} key={elm._id}>
            <div style={{color:"gray"}}>{dated.slice(0,10)} {dated.slice(11,16)}</div>
            <div><b>{elm.comment}</b></div>
            <hr />
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
    <h4 style={{backgroundColor:"black",color:"white",padding:"10px"}}>KIA 타이거즈를 사랑하는 사람들</h4>
    <div style={{marginLeft:"5%",marginRight:"5%"}}>
    <hr />
    </div>
    <div style={{textAlign:"center"}}>
    <form onSubmit={handelSubmit}>
    <input type="text" style={{width:"90%",height:"10vh"}} ref={textRef}></input>
    </form>
    </div>
    <div style={{marginLeft:"5%",marginRight:"5%"}}>
    <hr />
    </div>
        {arr}
    
    </> );
}

export default Support;