import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Announcements from "./Sidebar/Announcements";
import Assistant from "./Sidebar/Assistant";
import Homee from "./Sidebar/Homee";
import MyCourses from "./Sidebar/My Courses";
import Profile from "./Sidebar/Profile";
import Settings from "./Sidebar/Settings";
import Timetable from "./Sidebar/Timetable";
import Gen from "./Sidebar/Gen";
import ProtectedRoutes from "./Protectedroutes";

import StudentHome from "./StudentHome";
import ContactForm from "./ContactFom";




function App() {
  
  // 1. Define the shared state here
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      category: "Academic",
      title: "Spring Registration Open",
      desc: "Enrollment for the Spring 2024 semester is now open for all senior students.",
    },

    {
      id: 2,
      category: "Service",
      title: "Campus Connectivity Upgrade",
      desc: "Wi-Fi services in the Main Library will be briefly interrupted this Friday for maintenance.",
    }
  ]);


const [schedule, setSchedule] = useState([
  { id: 1, code: "CS101", name: "Intr. to Computer Science", time: "09:00 AM", day: "Monday" },
  { id: 2, code: "MATH201", name: "Calculus II", time: "11:00 AM", day: "Monday" }
]);




return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
        
       <Route
  path="/Home"
  element={
    <ProtectedRoutes>
      <Home announcements={announcements} schedule={schedule} />
    </ProtectedRoutes>
  }
/>

        <Route 
          path="/Announcements" 
          element={
            <Announcements 
              announcements={announcements} 
              setAnnouncements={setAnnouncements} 
            />
          } 
        />

        <Route 
          path="/Timetable" 
          element={<Timetable schedule={schedule} setSchedule={setSchedule} />} 
        />
        <Route path="/Assistant" element={<Assistant/>} />
        <Route path="/Homee" element={<Homee />} />
        <Route path="/My Courses" element={<MyCourses />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Gen" element={<Gen />} />
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path="/ContactForm" element={<ContactForm />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;









