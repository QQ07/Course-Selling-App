import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses/", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
        console.log(
          data.courses.map((c) => {
            return c;
          })
        );
      });
    });
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {/* {JSON.stringify(courses)} */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {courses.map((course) => {
          return <CourseCard c={course} />;
        })}
      </div>
    </div>
  );
}

export function CourseCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        // border:"2px solid black",
        margin: "1rem",
        width: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <br />
        <img
          src={props.c.imageLink}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: "50%" }}
        />
        <br />
        <h2>{props.c.title}</h2>
        <br />
        {props.c.description}
        <br />
        <Button
          onClick={() => {
            navigate("/courses/" + props.c.id);
          }}
          variant="text"
          style={{
            margin: 5,
          }}
        >
          {props.c.price}
        </Button>
        <br />
      </div>
    </Card>
  );
}

export default Courses;
