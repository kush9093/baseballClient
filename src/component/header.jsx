import { Link } from "react-router-dom";



function Header() {
    return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/player"><b>PLAYER</b></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/support"><b>SUPPORT</b></Link>
        </li>

      </ul>
  </div>
</nav>
    <div style={{margin:"10px"}}>
    
    
    </div>
    </> );
}

export default Header;