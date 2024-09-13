import { Component } from "react";

class CardList extends Component {

  render() {

    const { creatures } = this.props;

    return (
      <div className='card-list'>
        {creatures.map((creature) => {
          
          const { name, id, email } = creature; 

          return (
            <div className='card-container' key={id}>
              <img 
              src={`https://robohash.org/${id}/?set=set5&size=180x180`} 
              alt={`creature ${name}`} 
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        )})}
      </div>
    )
  }
}

export default CardList;