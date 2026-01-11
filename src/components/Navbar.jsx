import "./Navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaBriefcase, FaHome, FaPortrait, FaTimes } from "react-icons/fa"
import { FaPerson, FaPhone } from "react-icons/fa6"

function Navbar() {
   
   const [click, setClick] = useState(false)
   const [menu, setMenu] = useState(false)

   const handleClick = () => setClick(!click)
   const showMenu = () => {
        if (window.innerWidth <= 960) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

   
   /*window.addEventListener("resize", showButton)*/
   window.addEventListener("resize", showMenu)

    return(
        <>
          <nav className="nav-web">
            {<div className={menu ? "bars" : "bars-null"} onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
             </div> }

               <div className={click ? "links links-unseen" : "links"}>
                <Link className="link" to="/" onClick={handleClick}><FaHome/> Home</Link>
               <Link className="link" to="/about" onClick={handleClick}><FaPortrait/> About</Link>
               <Link className="link" to="/portfolio" onClick={handleClick}><FaBriefcase/> Portfolio</Link>
               <div className={menu ? "contact-2" : "no-contact"} onClick={handleClick}>
                <Link target="_blank" className="link" ><FaPhone/> 07067393856</Link>
             </div>
             </div>

             <div className="contact">
                <p target="_blank" className="link">Contact</p>
             </div>

          </nav>
        </>
    )
}

export default Navbar