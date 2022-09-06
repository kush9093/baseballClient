import { Link } from "react-router-dom";

function PlayerHeader() {
    return (<>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/player">전체</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/player/pitcher">투수</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/player/cathcer">포수</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/player/infielder">내야수</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/player/outfielder">외야수</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}

export default PlayerHeader;