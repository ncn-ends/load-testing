import http from "k6/http";
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 },
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 },
        { duration: '5m', target: 400 },
        { duration: '10m', target: 0 },
    ]
}


export default () => {
    http.get("https://localhost:5001/ping");

    // http.batch(
    //     [
    //         ['GET', "https://localhost:5001/ping"],
    //         ['GET', "https://localhost:5001/ping"],
    //         ['GET', "https://localhost:5001/ping"],
    //     ]
    // )

    sleep (1);
}