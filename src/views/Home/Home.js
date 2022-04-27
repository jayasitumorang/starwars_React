import { Link } from 'react-router-dom';
import './Home.css'
import { cardsData } from '../../data';
import Card from "../../components/Card/Card";


export default function Home () {
  return (
      <section className="cards">
        <div className="cards__body">
          {
            cardsData.map((card, index) => {
              return (
                <Link to={card.link} key={index}>
                  <Card text={card.text} image={card.image} />
                </Link>
              )
            })
          }
        </div>
      </section>
  )
}
