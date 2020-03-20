import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: [],
      // user: this.props.user,
      // listing: this.props.listing
      //reviews: this.props.reviews,
      username: "Beatrice",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dnezkumar/128.jpg",
      listing: 64,
      date: "September 2019",
      reviewsLength: 5,
      reviewText: "Excepturi ut assumenda omnis tempora dolorem ratione quos dolorem. Sit autem aut. Fuga qui et est non ut quis doloribus provident omnis. Eos molestiae necessitatibus dicta. Dolorem cumque consequuntur nostrum sint. Suscipit eligendi explicabo.",
      com_rating: 2.6,
      acuracy_rating: 3.9,
      clean_rating: 3.4,
      checkin_rating: 4.3,
      location_rating: 1.1,
      value_rating: 4.0,
      star_rating: 3
    }
  }
  getListing() {
    axios.get("/api/listing")
      .then(res => JSON.stringify(res.data))
      .then((data) => {
        // console.log(data);
        this.setState({
          listing: data
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('GET listing request sent')
      })
  }
  getUser() {
    axios.get("/api/user")
      .then((data) => {
        console.log(data);
        this.setState({ user: data })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('GET user request sent')
      })
  }
  getReviews() {
    axios.get("/api/reviews")
      .then(res => JSON.stringify(res.data))
      .then((data) => {
        let reviewsLength = data.length;

        console.log("DATA: ", data, "LENGTH: ", reviewsLength);
        this.setState({
          // reviews: data,
          // reviewsLength: reviewsLength

        })
      })
      .catch((error) => {
        console.log('Error getting reviews from the database', error);
      })
      .finally(() => {
        console.log('GET reviews request sent')
      })
  }
  componentDidMount() {
    this.getListing();
    this.getReviews();
    this.getUser();
  }

  render() {
    { this.state.reviews }
    return (

      <div>
        <h1>Reviews</h1>
        ⭐️ {this.state.star_rating}
        {' | '}
        {this.state.reviewsLength} reviews
        <div className="app">
          {/* <Reviews reviews={this.state.reviews} /> */}

          <div className="ratingsBox">
            <div className="leftBox">
              <div className="rating">Communication </div>

              <div className="rating">Accuracy </div>

              <div className="rating">Cleanliness </div>

            </div>
            <div className="leftBars">
              <div className="fas fa-minus">{' '}{this.state.com_rating}</div> <br></br>
              <div className="fas fa-minus">{' '}{this.state.acuracy_rating}</div> <br></br>
              <div className="fas fa-minus">{' '}{this.state.clean_rating}</div> <br></br>
            </div>
            <div className="rightBox">
              <div className="rating">Check-in </div>
              <div className="rating">Location </div>
              <div className="rating">Value </div>
            </div>
            <div className="rightBars">
              <div className="fas fa-minus">{' '}{this.state.checkin_rating}</div> <br></br>
              <div className="fas fa-minus">{' '}{this.state.location_rating}</div> <br></br>
              <div className="fas fa-minus">{' '}{this.state.value_rating}</div> <br></br>
            </div>
          </div>
          <div className="userBox">
            <img src={this.state.avatar} className="image"></img>
            <div className="name">{this.state.username}</div><br></br>
            <div className="date">{this.state.date}</div>
          </div>
          <div className="reviewText">
            <div>{this.state.reviewText}</div>
          </div>
          <div className="reviewBreak"></div>

        </div>
      </div >
    );
  }
};



ReactDOM.render(<App />, document.getElementById("app"));