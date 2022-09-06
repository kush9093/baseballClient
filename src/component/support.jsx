import { useEffect, useState } from "react";
import Supportinput from "./supportinput";
import Supportoutput from "./supportoutput";

function Support({ supportAPI }) {

    const [review, setReview] = useState();

    useEffect(() => {
        supportAPI.read().then(recv => {
            setReview(recv.datas)
        })

    }, [])
    let arr;
    if (review) {
        arr = review.map((elm) => {
            let a = new Date(elm.date);
            a.setHours(a.getHours() + 9)
            a.setMinutes(a.getMinutes())
            let dated = a.toISOString()
            return <Supportoutput key={elm._id} elm={elm} dated={dated} />
        })
    }
    const hendleset = (data) => {
        setReview([...review, data])
    }



    return (<>
        <h4 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>KIA 타이거즈를 사랑하는 사람들</h4>
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <hr />
        </div>
        <div style={{ textAlign: "center" }}>
            <Supportinput supportAPI={supportAPI} hendleset={hendleset} />
        </div>
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
            <hr />
        </div>
        {arr}
    </>);
}

export default Support;