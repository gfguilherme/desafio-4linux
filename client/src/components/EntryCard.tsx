import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

type EntryCardProps = {
  api: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  link: string;
  category: string;
};

export default function EntryCard({
  api,
  description,
  auth,
  https,
  cors,
  link,
  category,
}: EntryCardProps) {
  const handleOpen = () => {
    window.open(`${link}`, "_blank");
  };
  return (
    <Grid item xs="auto" className="entryCard">
      <Card
        onClick={handleOpen}
        variant="elevation"
        elevation={5}
        sx={{
          width: 256,
          height: 256,
        }}
      >
        <CardContent>
          <Grid item xs={12}>
            <Typography color="text.secondary">{category} </Typography>
          </Grid>

          <Grid container flexDirection="column" spacing={2}>
            <Grid container item alignItems="center" flexDirection="column">
              <Grid item xs={12}>
                <img
                  className="img-thumbnail"
                  src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                  {api}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">{description}</Typography>
              </Grid>
            </Grid>

            <Grid
              container
              flexDirection="row"
              columnSpacing={1}
              justifyContent="center"
            >
              <Grid item>
                <Typography color="text.secondary">
                  {https ? "HTTPS" : "HTTP"}
                </Typography>
              </Grid>

              {cors === "yes" ? (
                <Grid item>
                  <Typography color="text.secondary">CORS</Typography>
                </Grid>
              ) : (
                ""
              )}

              {auth !== "" ? (
                <Grid item>
                  <Typography color="text.secondary">{auth}</Typography>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
