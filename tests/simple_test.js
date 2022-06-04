import http from 'k6/http';

/** 
 * Simple api test
*/

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '10s'
}

export default () => {
    http.get("https://localhost:5001/ping");
}