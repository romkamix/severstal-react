import { FC } from "react";
import { IPost } from "../types";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6} sx={{ position: "relative" }}>
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={() => navigate(`/news/${post.id}`)}
      >
        <Card sx={{ height: "100%" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>

            <Typography variant="subtitle1" paragraph sx={{ flexGrow: 1 }}>
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Post;
