import React from 'react';
import dispCards from './dispCards.js'
class TileData extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  }
  componentDidMount() {
    this.setState({
      users: [
      {
      "id": 1,
      "title": "Are you up for the plan?"
      },
      {
      "id": 2,
      "title": "What do you like most?"
      }
      ],
      isLoading: false,
     });
   }
    
  
  render() {
    const { isLoading, users, error } = this.state;
  return (
    <React.Fragment>
      <h4>List of Questions</h4>
      
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
        users.map(user => {
          const { id, title } = user;
          return (
            <div>
              <dispCards question = {user}/>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>
  )
  }
}
export default TileData;
