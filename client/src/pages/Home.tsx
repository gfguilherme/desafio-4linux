import {
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import apiImg from "../assets/images/api.svg";
import { AsyncAutocomplete } from "../components/AsyncAutocomplete";
import EntryCard from "../components/EntryCard";
import { publicapis } from "../services/api";
import styles from "./Home.module.css";

type IEntries = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

type IResponse = {
  count: number;
  entries: IEntries[];
};

export default function Home() {
  const [entries, setEntries] = useState<IEntries[]>([]);

  const [items, setItems] = useState<IEntries[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [category, setCategory] = useState<string | null>("");
  const [httpsCheck, setHttpsCheck] = useState<boolean | undefined>(true);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const response = await publicapis.get<IResponse>("entries", {
          params: { category: category, https: httpsCheck },
        });
        setEntries(response.data.entries);
        setItems(response.data.entries.slice(0, 8));
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, [category, httpsCheck]);

  const handleLoad = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    setItems((prev) => [
      ...prev,
      ...entries.slice(indexOfFirstItem, indexOfLastItem),
    ]);

    setCurrentPage((prev) => prev + 1);
  };

  const handleGetRandom = async () => {
    try {
      const response = await axios.get<IResponse>(
        "https://api.publicapis.org/random"
      );
      window.open(`${response.data.entries[0].Link}`, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Public APIs</h1>
          <p className={styles.description}>Uma coleção de APIs públicas</p>
        </div>
        <img src={apiImg} className={styles.apiImg} />
      </div>

      <Container>
        <Grid container spacing={2} flexDirection="column">
          <Grid
            container
            item
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid container spacing={2} item flexDirection="column" md={6}>
              <Grid item xs={12} md={6}>
                <AsyncAutocomplete handleChangeCategory={setCategory} />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      sx={{ marginLeft: "5px" }}
                      checked={httpsCheck}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setHttpsCheck(event.target.checked);
                      }}
                    />
                  }
                  label="Suporta HTTPS"
                />
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Button variant="contained" onClick={handleGetRandom} fullWidth>
                Escolher um aleatório
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={4}
            flexDirection="column"
            alignItems="center"
          >
            <Grid item container spacing={4} justifyContent="center">
              {items.map((entry: IEntries) => (
                <EntryCard
                  key={entry.Link}
                  api={entry.API}
                  description={entry.Description}
                  auth={entry.Auth}
                  https={entry.HTTPS}
                  cors={entry.Cors}
                  link={entry.Link}
                  category={entry.Category}
                />
              ))}
            </Grid>
            <Grid item sx={{ paddingBottom: "100px" }}>
              <Button variant="contained" onClick={handleLoad}>
                Carregar mais
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
