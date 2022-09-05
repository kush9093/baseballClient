import { Link } from "react-router-dom";



function Header() {
    return ( <>
    <div style={{margin:"10px"}}>
    <Link to="/player" style={{margin:"10px"}}>PLAYER</Link>
    <Link to="/support">SUPPORT</Link>
    </div>
    </> );
}

export default Header;