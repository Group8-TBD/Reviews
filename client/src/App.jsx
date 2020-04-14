/* eslint-disable camelcase */
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
    };
  }

  getListing() {
    axios.get('/api/listing')
      .then((result) => {
        let length = Object.keys(result.data.reviews).length;
        let reviews = [];
        let usernames = [];
        let avatars = [];
        let ids = [];
        let texts = [];
        let dates = [];
        for (let i = 1; i < length; i++) {
          reviews.push(result.data.reviews[i].username, result.data.reviews[i].text);
          usernames.push(result.data.reviews[i].username);
          avatars.push(result.data.reviews[i].avatar);
          ids.push(result.data.reviews[i].id);
          texts.push(result.data.reviews[i].comment + ' ' + result.data.reviews[i].comment),
          dates.push(result.data.reviews[i].date);
        }
        this.setState({
          listing: result.data.listing_id,
          com_rating: result.data.com_rating,
          acuracy_rating: result.data.accuracy_rating,
          clean_rating: result.data.clean_rating,
          checkin_rating: result.data.checkin_rating,
          location_rating: result.data.location_rating,
          value_rating: result.data.value_rating,
          star_rating: result.data.star_rating,
          usernames: usernames,
          avatars: avatars,
          reviewsLength: length,
          reviewIds: ids,
          reviewTexts: texts,
          dates: dates
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('GET listing request sent');
      });
  }
  // getReviews() {
  //   axios.get("/api/reviews")
  //     .then((result) => {
  //       let length = Object.keys(result.data.review).length;
  //       let reviews = [];
  //       let usernames = [];
  //       let avatars = [];
  //       let ids = [];
  //       let texts = [];
  //       let dates = [];
  //       for (let i = 0; i < length; i++) {
  //         reviews.push(result.data[i].username, data.data[i].text);
  //         usernames.push(result.data[i].username);
  //         avatars.push(result.data[i].avatar);
  //         ids.push(result.data[i].id);
  //         texts.push(result.data[i].text);
  //         dates.push(result.data[i].date);
  //       }
  //       this.setState({
  //         usernames: usernames,
  //         avatars: avatars,
  //         reviewsLength: length,
  //         reviewIds: ids,
  //         reviewTexts: texts,
  //         dates: dates
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('Error getting reviews from the database', error);
  //     })
  //     .finally(() => {
  //       console.log('GET reviews request sent')
  //     })
  // }
  componentDidMount() {
    this.getListing();
  //  this.getReviews();
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
              <progress className={styles.progress} value={this.state.com_rating} max="5"></progress><br></br>
              <progress className={styles.progress} value={this.state.acuracy_rating} max="5"></progress><br></br>
              <progress className={styles.progress} value={this.state.clean_rating} max="5"></progress><br></br>
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
              <progress className={styles.progress} value={this.state.checkin_rating} max="5"></progress><br></br>
              <progress className={styles.progress} value={this.state.location_rating} max="5"></progress><br></br>
              <progress className={styles.progress} value={this.state.value_rating} max="5"></progress><br></br>
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