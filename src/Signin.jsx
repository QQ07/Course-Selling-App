import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();
  return (
    <div>
      <center>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 15,
          }}
        >
          <Typography variant="h5">
            Welcome back to StudySphere..
          </Typography>
        </div>
      </center>
      <center>
        <Card
          style={{
            width: 400,
            padding: 20,
          }}
        >
          <center>
            {/* Username:{" "} */}
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth={true}
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <br />
            <br />
            {/* Password:{" "} */}
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth={true}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button
              onClick={() => {
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",

                  body: JSON.stringify({
                    username: email,
                    password: password,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((res) => {
                  return res.json().then((data) => {
                    console.log(data);
                    localStorage.setItem("token", data.token);
                    if (data.token) window.location = "/Courses";
                    else {
                      alert("invalid Username or password");
                    }
                  });
                });
              }}
              style={{ margin: "auto" }}
              variant="contained"
            >
              Sign in
            </Button>
          </center>
        </Card>
      </center>
    </div>
  );
}

export default Signin;
