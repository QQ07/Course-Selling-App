import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState();
  const currLocation = useLocation();
  // console.log(currLocation)
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              margin: 3,
            }}
          >
            <Button
              variant="text"
              onClick={() => {
                navigate("/");
              }}
              style={{
                margin: 3,
                fontSize:"1.4rem"
              }}
            >
              StudySphere
            </Button>
          </div>
          <div>
            <Button
              variant="text"
              style={{
                margin: 5,
              }}
            >
              {userEmail.split("@")[0]}
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
                navigate("/signin");
              }}
              style={{
                margin: 5,
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: 4,
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              navigate("/");
            }}
            style={{
              margin: 3,
              fontSize: "1.4rem",
            }}
          >
            StudySphere
          </Button>
        </div>
        <div>
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
        </div>
      </div>
    );
}

export default Appbar;
