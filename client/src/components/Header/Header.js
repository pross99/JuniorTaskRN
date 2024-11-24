
import Navbar from "react-bootstrap/Navbar"
import './Header.css'
import logo from "../../logo.png"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

const Header = () => {




    return (
        <header>
        <img src={logo} className="logo" />
        <Navbar bg= "dark" variant="dark"></Navbar>
        <Nav>
            <NavLink style={{padding:"20px"}} className="nav-link" to="/">Home</NavLink>
        </Nav>
        </header>
        
    )
}

export default Header