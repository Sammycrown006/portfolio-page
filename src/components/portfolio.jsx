import "./portfolio.css"
import newMonth from "../assets/New-month.png"
import cutEffect from "../assets/cut-effect.png"
import coke from "../assets/COKE-2.PNG"

function Portfolio() {

    const cards = [
        {
            id: 1,
            name: "Average flier for adevertisment",
            price: "$500",
            img: newMonth
        },
        {
            id: 2,
            name: "Text effect logo, easy and affordable",
            price: "$300",
            img: cutEffect
        },
        {
            id: 3,
            name: "Brand endorsement flier",
            price: "$500",
            img: coke
        }
    ]

    return(
        <>
          <div className="portfolio-container">
            <div className="heading">
                <h1>PORTFOLIO</h1>
            </div>

            <div className="port">
               {cards.map((car, index) => <li className="list-item" key={car.id}>
                <img src={car.img} alt={car.alt} />
                <p>{car.name}</p>
                <p>{car.price}</p>
               </li>)}
            </div>
          </div>
        </>
    )
}

export default Portfolio