// import router
import Signup from "./Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course";
import Landing from "./landing";
import "./App.css";

import RecoilRoot from "recoil";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      {/* <RecoilRoot> */}
        <Router>
          <Appbar></Appbar> 
          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseID" element={<Course />} />
            {/* <Route path="/about" element={<CreateCourse />} />
                <Route path="/courses" element={<ShowCourses />} /> */}
          </Routes>
        </Router>
      {/* </RecoilRoot> */}
    </div>
  );
}

function TodoApp(props) {
  return <div>Hello {props.text}</div>;
}

export default App;
