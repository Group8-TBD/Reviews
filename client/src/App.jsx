import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      user: [],
      listing: []
    }
  }
  getListing() {
    axios.get("/api/listing")
      .then((data) => {
        console.log(data);
        this.setState({ listing: data })
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
      .then((data) => {
        console.log(data);
        this.setState({ reviews: data })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('GET reviews request sent')
      })
  }
  componentDidMount() {
    this.getListing();
    this.getReviews();
  }

  render() {
    return (
      <div>
        <h1>THIS IS MY APP</h1>
      </div>
      <div className="app">
        <Reviews review={this.state.reviews} />
      </div>

    );
  }
};



ReactDOM.render(<App />, document.getElementById("app"));