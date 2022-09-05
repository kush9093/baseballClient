import { Link } from "react-router-dom";

function PlayerHeader() {
    return (<>
    <div>
        <Link to="/player">전체</Link>
        <Link to="/player/pitcher">투수</Link>
        <Link to="/player/cathcer">포수</Link>
        <Link to="/player/infielder">내야수</Link>
        <Link to="/player/outfielder">외야수</Link>
    </div>
    </> );
}

export default PlayerHeader;