//! @/api/_auth.js
import { axios } from "../utils";

const base = "https://jsonplaceholder.typicode.com/";

const jsonplaceholder = {
  posts: (_limit = 10, _page = 1) =>
    axios.get(`${base}posts`, { params: { _limit, _page } }),
  getPostById: (id: number) => axios.get(`${base}posts/${id}`),
};

export default jsonplaceholder;
