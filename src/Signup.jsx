import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();
  const navigate = useNavigate();
  return (
    <div>
      {email}
      {password}
      <center>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 15,
          }}
        >
          <Typography variant="h5">
            Welcome to Yoursera. SignUp below
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
                setemail(e.target.value);
              }}
              id="username"
              fullWidth={true}
              label="Username"
              variant="outlined"
            />
            <br />
            <br />
            {/* Password:{" "} */}
            <TextField
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              id="password"
              fullWidth={true}
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button
              style={{ margin: "auto" }}
              variant="contained"
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/admin/signup",
                  {
                    username: email,
                    password: password,
                  }
                );
                let data = response.data;
                localStorage.setItem("token", data.token);
                navigate("/addcourse");
                // fetch("http://localhost:3000/admin/signup", {
                //   method: "POST",

                //   body: JSON.stringify({
                //     username: email,
                //     password: password,
                //   }),
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                // }).then((res) => {
                //   return res.json().then((data) => {
                //     navigate("/addcourse");
                //     console.log(data.token);
                //     localStorage.setItem("token", data.token);
                //   });
                // });
              }}
            >
              Sign Up
            </Button>
          </center>
        </Card>
      </center>
    </div>
  );
}

export default Signup;
