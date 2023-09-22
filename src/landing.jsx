import { Typography, Button } from "@mui/material";
import { Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="full">
        <img src="./study.webp" alt="" />
        <div className="heroRight">
          <div>
            <Typography variant="h3">Welcome to the Admin Panel</Typography>
            <Typography variant="h5">
              Stay in command of your educational platform.
            </Typography>
          </div>
          <div>
            <ExtraButtonsIfLoggedIn />
          </div>
        </div>
      </div>
    </>
  );
}
function ExtraButtonsIfLoggedIn() {
  const [userEmail, setUserEmail] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("http://localhost:3000/admin/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            if (data.username) {
              setUserEmail(data.username);
              console.log(data.username + " signed in");
            }
          });
        });
      }
    }
  }, []);
  if (userEmail) {
    return (
      <>
        <Button
          variant="contained"
          style={{
            margin: 5,
          }}
          onClick={() => {
            navigate("/Courses");
          }}
        >
          Courses
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/addcourse");
          }}
          style={{
            margin: 5,
          }}
        >
          Add Course
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button
          variant="contained"
          style={{
            margin: 5,
          }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/signin");
          }}
          style={{
            margin: 5,
          }}
        >
          Sign in
        </Button>
      </>
    );
  }
}
export default Landing;
