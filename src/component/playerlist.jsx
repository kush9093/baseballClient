import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlayerHeader from "./playerheader";

function PlayerList({ playerAPI }) {

    const [data, setData] = useState([]);
    const {position} = useParams()
    useEffect(() => {
        playerAPI.list(position).then(recv => {
            setData(recv.datas);
        })
    }, [])
    useEffect(()=>{
        playerAPI.list(position).then(recv => {
            setData(recv.datas);
        })
    },[position])

    let datas = []
    if(data){
    datas = data.map((elm)=>{
        let obj = {"투수":"pitcher","포수":"cathcer","내야수":"infielder","외야수":"outfielder"};
        let lt = "/player"+"/"+obj[elm.position]+"/"+elm.pcode;
       return <Link to={lt}><div style={{width:"17%",display:"inline-block" ,margin:"10px"}}><div style={{ backgroundImage: "url(" + elm.playerImg + ")",
       backgroundPosition: 'center',backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',width:"100%", height:"300px",}}></div>
            <div style={{backgroundColor:"black",color:"white",fontSize:"30px"}}>{elm.playerName}</div>
            </div></Link>
     })
     }


    return (<>
    <PlayerHeader/>
        <div>
            {datas}
        </div>
    </>);
}

export default PlayerList;