import { FaLocationArrow } from "react-icons/fa"
import "./about.css"

function About() {
    return(
       <>
         <div className="about-container">
            <div className="text">
               <h1 className="heading">ABOUT</h1>
               <p className="email">jasonmartn@gmail.com</p>
               <p className="long-text">
                  The	pain	of	failure	correlates	to	the	height	of	expectation.	When	desire	is
high,	it	hurts	to	not	like	the	outcome.	Failing	to	attain	something	you	want	hurts
more	than	failing	to	attain	something	you	didn’t	think	much	about	in	the	first
place.	This	is	why	people	say,	“I	don’t	want	to	get	my	hopes	up.”
Feelings	come	both	before	and	after	the	behavior.	Before	acting,	there	is	a
feeling	that	motivates	you	to	act—the	craving.	After	acting,	there	is	a	feeling
that	teaches	you	to	repeat	the	action	in	the	future—the	reward
               </p>
            </div>


            <div className="bottom-text">
               <p className="location"><FaLocationArrow />Florida Orlando</p>
               <p className="address">12529 State Road 535</p>
            </div>
         </div>
       </>
    )
}

export default About