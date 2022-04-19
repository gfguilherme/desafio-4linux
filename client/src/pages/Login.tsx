import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import LoginImg from "../assets/images/login.svg";
import { useAuth } from "../hooks/useAuth";
import styles from "./Login.module.css";

export default function Login() {
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <img src={LoginImg} className={styles.logoImg} />
        </Grid>

        <Grid item direction="column" alignItems="center" xs={3}>
          <Paper elevation={10} sx={{ padding: "40px" }}>
            <Grid container spacing={3} flexDirection="column">
              <Grid item xs={12}>
                <TextField
                  value={username}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(event.target.value)
                  }
                  label="Usuário"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                  }
                  label="Senha"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => handleLogin(username, password)}
                  variant="contained"
                  fullWidth
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
