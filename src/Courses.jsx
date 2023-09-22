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
      <center>
        <h1>Courses</h1>
      </center>
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
          variant="text"
          style={{
            margin: 5,
          }}
        >
          {props.c.price}
        </Button>
        {<EditButton edit={props.edit} id={props.c.id}/>}
        <br />
      </div>
    </Card>
  );
}
function EditButton({ edit,id }) {
  const navigate = useNavigate();
  if (edit != 0)
    return (
      <>
        <Button
          onClick={() => {
            navigate("/courses/" + id);
          }}
          variant="text"
          style={{
            margin: 5,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            id="_24x24_On_Light_Edit"
            data-name="24x24/On Light/Edit"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                id="view-box"
                width="24"
                height="24"
                fill="none"
              ></rect>{" "}
              <path
                id="Shape"
                d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                transform="translate(3.25 3.25)"
                fill="#2600ff"
              ></path>{" "}
            </g>
          </svg>
        </Button>
      </>
    );
}
export default Courses;
