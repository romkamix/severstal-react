//! @/api/_auth.js
import { axios } from "../utils";

const base = "https://jsonplaceholder.typicode.com/";

const jsonplaceholder = {
  posts: (_limit = 10, _page = 1) =>
    axios.get(`${base}posts`, { params: { _limit, _page } }),
  getPostById: (id: number) => axios.get(`${base}posts/${id}`),
  getCommentsByPostId: (id: number) => axios.get(`${base}posts/${id}/comments`),
  comments: () => axios.get(`${base}comments`),
  photos: () => axios.get(`${base}photos`),
  todos: () => axios.get(`${base}todos`),
  users: () => axios.get(`${base}users`),
};

export default jsonplaceholder;
