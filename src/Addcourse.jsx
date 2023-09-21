import * as React from "react";
import Button from "@mui/material/Button";
import { Card, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function Addcourse() {
  const [c_name, setc_name] = React.useState();
  const [description, setdescription] = React.useState();
  const [price, setprice] = React.useState();
  const [imageLink, setImageLink] = React.useState();
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "5rem" }}>
      <Card
        style={{
          width: 400,
          padding: 20,
        }}
      >
        <Typography variant="h5">Add course below</Typography>
        <TextField
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setc_name(e.target.value);
          }}
          fullWidth={true}
          label="Course Name"
          variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setprice(e.target.value);
          }}
          fullWidth={true}
          label="Price"
          variant="outlined"
        />
        <TextField
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
          fullWidth={true}
          label="Link"
          variant="outlined"
        />
        

        <Button
          style={{ margin: "auto" }}
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",

              body: JSON.stringify({
                title: c_name,
                description,
                price,
                imageLink:imageLink,
                published: true,
              }),
              headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.token,
              },
            }).then((res) => {
              return res.json().then((data) => {
                console.log("course added");
              });
            });
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default Addcourse;
