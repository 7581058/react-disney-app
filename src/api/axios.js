import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:  {
    api_key: "797af57f30a13830a77616353ec4cf48",
    language: "ko-KR"
  }
})

export default instance