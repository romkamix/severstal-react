import { FC, useEffect, useState } from "react";
import { IPost } from "../../types";
import { Grid, Pagination } from "@mui/material";
import { jsonplaceholder as api } from "../../api";
import Post from "../../components/Post";
import { Loader } from "../../components";

const NewsView: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]),
    [isLoading, setIsLoading] = useState(false),
    [page, setPage] = useState(1),
    [limit] = useState(10),
    [total, setTotal] = useState(0),
    handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);

      api
        .posts(limit, page)
        .then(({ data, headers }) => {
          setPosts(data);
          setTotal(headers["x-total-count"]);
        })
        .catch((e) => console.log(e))
        .then(() => setIsLoading(false));
    }

    // eslint-disable-next-line
  }, [limit, page]);

  return (
    <div className="posts">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Grid>

          {total !== 0 && (
            <>
              <div className="pagination">
                <Pagination
                  page={page}
                  count={Math.ceil(total / limit)}
                  color="primary"
                  size="small"
                  onChange={handleChangePage}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NewsView;
