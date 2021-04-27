import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-189-20-28.us-east-2.compute.amazonaws.com/pilotrun/public/index.php/api",
  headers: {
    "Content-type": "application/json"
  }
});