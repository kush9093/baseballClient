import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Player from "./player";
import PlayerHeader from "./playerheader";

function PlayerList({ playerAPI }) {

    const [data, setData] = useState([]);
    const { position } = useParams()
    useEffect(() => {
        playerAPI.list(position).then(recv => {
            setData(recv.datas);
        })
    }, [])
    useEffect(() => {
        playerAPI.list(position).then(recv => {
            setData(recv.datas);
        })
    }, [position])

    let datas = []
    if (data) {
        datas = data.map((elm) => {
            let obj = { "투수": "pitcher", "포수": "cathcer", "내야수": "infielder", "외야수": "outfielder" };
            let lt = "/player" + "/" + obj[elm.position] + "/" + elm.pcode;

            return <Player lt={lt} elm={elm} key={elm.pcode}/>
        })
    }
    {/* <div style={{width:"17%",display:"inline-block" ,margin:"10px"}}><div style={{ backgroundImage: "url(" + elm.playerImg + ")",
       backgroundPosition: 'center',backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',width:"100%", height:"300px",}}></div>
            <div style={{backgroundColor:"black",color:"white",fontSize:"30px"}}>{elm.playerName}</div>
            </div> */}

    return (<>
        <PlayerHeader />
        <div className="container">
        <div className="row">
        <div className="d-flex flex-wrap align-middle mt-5 align-self-center">
            {datas}
        </div>
        </div>
        </div>
    </>);
}

export default PlayerList;