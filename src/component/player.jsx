import { Link } from "react-router-dom";

function Player({lt,elm}) {
    return ( <>
    <Link to={lt} className="m-3">
                <div className="card" style={{ width: "14rem", borderRadius:"10px" }}>
                    <div>
                    <img src={elm.playerImg} className="card-img-top" />
                    <div style={{position:"absolute",bottom:"16%",left:"5%",color:"black"}}><b>NO.{elm.backnum}</b></div>
                    </div>
                    <div className="card-body  bg-dark text-white" style={{padding:"8px"}}>
                        <p className="card-text">{elm.playerName}</p>
                    </div>
                </div>
            </Link>
    </> );
}

export default Player;