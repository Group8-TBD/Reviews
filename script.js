import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '60s', target: 200 },
    { duration: '60s', target: 400 },
    { duration: '60s', target: 200 },
  ]
};
//let random = () => (Math.floor(Math.random() * 10000000));

export default function() {
  //let random = Math.round(Math.random(1, 10000000) * 10000000, 0);
  let response = http.get(`http://localhost:3500/api/listing/${34342}`);
  check(response, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}
