import { sleep } from 'k6';
import http from "k6/http";

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(99)<150'] // 99% of requests must complete below 150ms
    }
}

export default () => {
    http.get("https://localhost:5001/ping");
    sleep(1)
}