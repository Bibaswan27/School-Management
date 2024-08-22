import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home.jsx";
import ChooseUser from "../src/components/ChooseUser";
import AdminRegister from "../src/components/AdminRegister";
import StudentRegister from "../src/components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister.jsx";
import AdminSignIn from "../src/components/AdminSignIn";
import StudentSignIn from "../src/components/StudentSignIn";
import TeacherSignIn from "../src/components/TeacherSignIn";
import AdminDashboard from "../src/pages/Admin/Dashboard";
import StudentDashboard from "../src/pages/Students/Dashboard";
import TeacherDashboard from "../src/pages/Teachers/Dashboard";

import Classes from "../src/pages/Admin/Classes";
import Exam from "../src/pages/Admin/Exam";
import Attendance from "../src/pages/Admin/Attendance";
import Teachers from "../src/pages/Admin/Teachers";
import Students from "../src/pages/Admin/Students";
import Assignments from "../src/pages/Admin/Assignments";
import Library from "../src/pages/Admin/Library";
import EventCalender from "../src/pages/Admin/EventCalender";
import Announcement from "../src/pages/Admin/Announcement";

import StudentAssignments from "../src/pages/Students/Assignments";
import ExamSection from "../src/pages/Students/Exams";
import AttendanceSection from "../src/pages/Students/Attendance";
import LibrarySection from "../src/pages/Students/Library";
import AnnouncementSection from "../src/pages/Students/Announcement";

import ClassSection from "../src/pages/Teachers/Classes";
import StudentSection from "../src/pages/Teachers/Students";
import TeacherSection from "../src/pages/Teachers/Teachers";
import EventSection from "../src/pages/Teachers/Events";
import CheckAnnouncementSection from "../src/pages/Teachers/Announcement";
import AssignmentSection from "../src/pages/Teachers/Assignments";
import CheckAttendanceSection from "../src/pages/Teachers/Attendance";
import CheckExamSection from "../src/pages/Teachers/Exams";
import Sidebar from "./pages/Admin/Sidebar.jsx";
import axios from "axios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route exact path="/admin-register" element={<AdminRegister />} />
        <Route exact path="/student-register" element={<StudentRegister />} />
        <Route exact path="/teacher-register" element={<TeacherRegister />} />
        {/* All the sign-in pages/routes */}

        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* All the dashboard routes */}

        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />

        {/* Admin section here */}

        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />

        {/* Students sections here  */}

        <Route exact path="/student/assignments" element={<StudentAssignments/>}/>
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/attendance"element={<AttendanceSection />}/>
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection />}/>

        {/* Teachers sections here */}
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />}/>
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />}/>
        <Route exact path="/teacher/announcement" element={<CheckAnnouncementSection />}/>
        <Route exact path="/teacher/events" element={<EventSection />} />
      </Routes>
    </Router>
  );
};

export default App;
