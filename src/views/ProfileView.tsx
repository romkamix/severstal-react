import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../hooks";
import { selectUser } from "../store";

const ProfileView: FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <>
      {user && (
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            padding: "1rem",
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {user.name}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              {user.email}
            </Typography>

            {user.created_at && (
              <Typography variant="subtitle1" paragraph>
                {new Date(user.created_at).toLocaleDateString()}
              </Typography>
            )}
          </CardContent>
          {user.image && (
            <CardMedia
              component="img"
              // sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              sx={{ width: { sm: 160 } }}
              image={user.image}
              alt={user.name}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default ProfileView;
