import { Http2ServerRequest } from "http2";

const http = new EasyHTTP;
const users = http.get('cards.json');

console.log(users);