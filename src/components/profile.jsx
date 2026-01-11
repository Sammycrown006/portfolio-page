import "./profile.css"
import {Link} from "react-router-dom"

function Profile() {
   return(
    <>
      <div className="profile-container">
        <div className="text-side">
          <h1 className="f-name">JASON</h1>
          <h1 className="L-name">MARTIN</h1>
          <p className="c-phrase">SEE THE WORLD DIFFERENTLY</p>

          <div className="btns">
            <Link to="/about"><button>About</button></Link>
            <Link to="/portfolio"><button>Portfolio</button></Link>

          </div>
        </div>
      </div>
    </>
   )
}

export default Profile