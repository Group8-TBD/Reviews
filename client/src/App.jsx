import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from '../dist/App.css';
import Star from '../media/star.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      usernames: [],
      avatars: [],
      reviewsLength: 0,
      reviewIds: [],
      reviewTexts: [],
      dates: [],
      listing: null,
      com_rating: null,
      acuracy_rating: null,
      clean_rating: null,
      checkin_rating: null,
      location_rating: null,
      value_rating: null,
      star_rating: 5
    }
  }

  getListing() {
    axios.get("/api/listing")
      .then((data) => {
        this.setState({
          listing: data.data[0].id,
          com_rating: data.data[0].com_rating,
          acuracy_rating: data.data[0].acuracy_rating,
          clean_rating: data.data[0].clean_rating,
          checkin_rating: data.data[0].checkin_rating,
          location_rating: data.data[0].location_rating,
          value_rating: data.data[0].value_rating,
          star_rating: data.data[0].star_rating
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('GET listing request sent')
      })
  }
  getReviews() {
    axios.get("/api/reviews")
      .then((data) => {
        let length = Object.keys(data.data).length;
        let reviews = [];
        let usernames = [];
        let avatars = [];
        let ids = [];
        let texts = [];
        let dates = [];
        for (let i = 0; i < length; i++) {
          reviews.push(data.data[i].username, data.data[i].text);
          usernames.push(data.data[i].username);
          avatars.push(data.data[i].avatar);
          ids.push(data.data[i].id);
          texts.push(data.data[i].text);
          dates.push(data.data[i].date);
        }
        this.setState({
          usernames: usernames,
          avatars: avatars,
          reviewsLength: length,
          reviewIds: ids,
          reviewTexts: texts,
          dates: dates
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
  }
  render() {

    return (

      <div className={styles.app}>
        <h1 className={styles.header}>Reviews</h1>
        <div className={styles.overview}>
          <img className={styles.star} src={Star} />
          {this.state.star_rating}
          {' | '}
          {this.state.reviewsLength} reviews
        </div>
        < div className={styles.app} >

          < div className={styles.ratingsBox} >
            <div className={styles.leftBox}>
              <div className={styles.rating}>Communication </div>

              <div className={styles.rating}>Accuracy </div>

              <div className={styles.rating}>Cleanliness </div>

            </div>
            <div>
            </div>
            <div className={styles.leftBars}>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
            </div>
            <div className={styles.leftScores}>
              <div>{this.state.com_rating}</div>
              <div>{this.state.acuracy_rating}</div>
              <div>{this.state.clean_rating}</div>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.rating}>Check-in </div>
              <div className={styles.rating}>Location </div>
              <div className={styles.rating}>Value </div>
            </div>
            <div className={styles.rightBars}>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
              <progress className={styles.progress} value="50" max="100"></progress><br></br>
            </div >
            <div className={styles.rightScores}>
              <div>{this.state.checkin_rating}</div>
              <div>{this.state.location_rating}</div>
              <div>{this.state.value_rating}</div>
            </div>
          </div >
          <div className={styles.userBox}>
            <img src={this.state.avatars[0]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[0]}</div><br></br>
            <div className={styles.date}>{this.state.dates[0]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[0]}</div>
          </div>
          <div className={styles.reviewBreak}></div>
          <div className={styles.userBox}>
            <img src={this.state.avatars[1]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[1]}</div><br></br>
            <div className={styles.date}>{this.state.dates[1]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[1]}</div>
          </div>
          <div className={styles.reviewBreak}></div>
          <div className={styles.userBox}>
            <img src={this.state.avatars[2]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[2]}</div><br></br>
            <div className={styles.date}>{this.state.dates[2]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[2]}</div>
          </div>
          <div className={styles.reviewBreak}></div>
          <div className={styles.userBox}>
            <img src={this.state.avatars[3]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[3]}</div><br></br>
            <div className={styles.date}>{this.state.dates[3]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[3]}</div>
          </div>
          <div className={styles.reviewBreak}></div>
          <div className={styles.userBox}>
            <img src={this.state.avatars[4]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[4]}</div><br></br>
            <div className={styles.date}>{this.state.dates[4]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[4]}</div>
          </div>
          <div className={styles.reviewBreak}></div>
          <div className={styles.userBox}>
            <img src={this.state.avatars[5]} className={styles.image}></img>
            <div className={styles.name}>{this.state.usernames[5]}</div><br></br>
            <div className={styles.date}>{this.state.dates[5]}</div>
          </div>
          <div className={styles.reviewText}>
            <div>{this.state.reviewTexts[5]}</div>
          </div>
          <div className={styles.reviewBreak}></div>

        </div >
      </div >
    );
  }
};




ReactDOM.render(<App />, document.getElementById("app"));