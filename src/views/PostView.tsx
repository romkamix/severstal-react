import { FC, useEffect, useState } from "react";
import { IPost } from "../types";
import { jsonplaceholder as api } from "../api";
import { Loader, Post } from "../components";
import { useParams } from "react-router-dom";

const PostView: FC = () => {
  const [post, setPost] = useState<null | IPost>(null),
    { id } = useParams(),
    [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && id) {
      setIsLoading(true);

      api
        .getPostById(parseInt(id))
        .then(({ data }) => setPost(data))
        .catch((e) => console.log(e))
        .then(() => setIsLoading(false));
    }

    // eslint-disable-next-line
  }, []);

  return <>{isLoading ? <Loader /> : <>{post && <Post post={post} />}</>}</>;
};

export default PostView;
