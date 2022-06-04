import http from "k6/http"

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: "2m", target: 400 },
        { duration: "11hr56m", target: 400 },
        { duration: "2m", target: 0 },
    ]
}

export default () => {
    http.batch([
        ['GET', `${API_BASE_URL}/endpointA`],
    ])
}