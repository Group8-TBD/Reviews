import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '50s', target: 200 },
    { duration: '50s', target: 400 },
    { duration: '50s', target: 200 },
  ]
};

export default function() {

  let response = http.get(`http://localhost:3500/api/listing/${ Math.floor(Math.random() * (5555555 - 5000000) + 5000000)}`);
  check(response, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}
