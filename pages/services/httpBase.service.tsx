// import ITutorialData from "../types/tutorial.type"
import axios, { AxiosInstance } from "axios";

class HttpService {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3001",
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

export default HttpService;
