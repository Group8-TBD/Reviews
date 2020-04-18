import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 500 },
  ]
};
//let random = () => (Math.floor(Math.random() * 10000000));

//Math.floor(Math.random() * (5555555 - 5000000) + 5000000))
// http.get(`http://localhost:3500/api/listing/${ Math.floor(Math.random() * (5555555 - 5000000) + 5000000)}`);

export default function() {
  //let random = Math.round(Math.random(1, 10000000) * 10000000, 0);
  let response = http.get(`http://54.183.203.80:3500/api/listing/${Math.floor(Math.random() * (9555555 - 5000000) + 5000000)}`);
  check(response, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}
