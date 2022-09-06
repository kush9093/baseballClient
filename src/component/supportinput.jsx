import { useRef } from "react";

function Supportinput({ supportAPI, hendleset }) {
    const textRef = useRef();
    const handelSubmit = (evt) => {
        evt.preventDefault();
        supportAPI.write(textRef.current.value).then(rec => {
            console.log(rec);
            hendleset(rec.datas)
            textRef.current.value = ""
        })

    }

    return (<>
        <form onSubmit={handelSubmit}>
            <input type="text" style={{ width: "90%", height: "10vh" }} ref={textRef}></input>
        </form>
    </>);
}

export default Supportinput;