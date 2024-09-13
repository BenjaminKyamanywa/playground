import { Component } from "react";
import { Card } from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {

  render() {

    const { creatures } = this.props;

    return (
      <div className='card-list'>
        {creatures.map((creature) => {
          return (
            <Card creature={creature} />
        )})}
      </div>
    )
  }
}

export default CardList;