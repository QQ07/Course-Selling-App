import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, TextField, Button } from "@mui/material";
import { CourseCard } from "./Courses";

function Course() {
  const [course, setCourse] = useState(null);
  let { courseID } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/" + courseID, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setCourse(data);
      });
    });
  }, []);

  if (course === null) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: "flex" , justifyContent:"center"}}>
      <CourseCard c={course} edit={0} />{/* <Card>{JSON.stringify(course)}</Card> */}
      <UpdateCard course={course} setCourse={setCourse} courseID={courseID} />
    </div>
  );
}

function UpdateCard(props) {
  let course = props.course;
  let courseID = props.courseID;
  const [c_name, setc_name] = useState(course.title);
  const [description, setdescription] = useState(course.description);
  const [price, setprice] = useState(course.price);
  const [imageLink, setImageLink] = useState(course.imageLink);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "5rem" }}>
      <Card
        style={{
          width: 400,
          padding: 20,
        }}
      >
        <Typography variant="h5">Edit course</Typography>
        <TextField
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setc_name(e.target.value);
          }}
          fullWidth={true}
          label="Name"
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
            fetch("http://localhost:3000/admin/courses/" + courseID, {
              method: "PUT",

              body: JSON.stringify({
                title: c_name,
                description,
                price,
                imageLink: imageLink,
              }),
              headers: {
                "Content-Type": "application/json",
                authorization: "bearer " + localStorage.token,
              },
            }).then((res) => {
              return res.json().then((data) => {
                // alert("course updated");
                let updatedCourse = {
                  title: c_name,
                  description,
                  price,
                  imageLink: imageLink,
                };
                console.log("hello");
                // Object.assign(course, ...updatedCourse);
                props.setCourse(updatedCourse);
              });
            });
          }}
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
}

export default Course;
