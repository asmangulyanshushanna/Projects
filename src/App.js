import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {loading:true, data: null}
    }
    
    async componentDidMount() {
    let response = await fetch('http://localhost:3000/hotels');
    let data = await response.json()
    this.setState({loading: false, data: data})
}
 
  render() {
    const data = this.state.data
    const loading = this.state.loading
    return (
        <div>
          <ul>
          {loading ? <div>...loading</div> : data.map(item => 
          (<p className='hotel' key={item.id} >{`Hotel-   ${item.name} Address-   ${item.address} Stars-   ${item.stars}`}
          <Link to={`/${item.id}/newcomment`}><p><button id={item.id}>add review</button></p></Link>
          {item.reviews.map(review => (<li className='review' key={review.id}>{`Comment- ${review.comment} Rating- ${review.rating}`}</li>))}</p>))}
          </ul>
        </div>
      );
    };

  }
  

export default App;