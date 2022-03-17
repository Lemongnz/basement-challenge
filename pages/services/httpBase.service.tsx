// import ITutorialData from "../types/tutorial.type"
import axios, {AxiosInstance} from "axios";

class HttpService {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}

export default HttpService;
