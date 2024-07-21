import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/1",
  headers: {
    //  Authorization: `<Your Auth Token>`,

    "Content-Type": "application/json",
    timeout: 1000,
  },
  // .. other options
});

export default instance;
