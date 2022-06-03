import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//common
import NavBar from "./NavBar/navBar" 

//panel member
import TopicsEvaluate from '../pages/panelMember/topicsEvaluate'
import Reference from '../pages/panelMember/reference'
import PanelMemberDashboard from '../pages/panelMember/dashboard'
import PanelMemberChat from '../pages/panelMember/chat'
import PresentationEvaluate from '../pages/panelMember/presentationEvaluate'
import Login from "../pages/home/Login";
import StudentSignUp from "../pages/student/StudentSignUp";
import StaffSignUp from "../pages/staff/StaffSignUp";
import SignUpChoose from "../pages/home/SignUpChoose";
import StudentMakeSubmission from "../pages/student/StudentMakeSubmission";
import AdminCreateSubmission from "../pages/staff/AdminCreateSubmission";

export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              <Route exact path="/panelMember/reference" element={<Reference />} />
              <Route exact path="/panelMember/dashboard" element={<PanelMemberDashboard />} />
              <Route exact path="/panelMember/chat" element={<PanelMemberChat />} />
              <Route exact path="/panelMember/presentation" element={<PresentationEvaluate />} />
              <Route exact path="/registerStudent" element={<StudentSignUp/>}/>
              <Route exact path="/registerStaff" element={<StaffSignUp/>}/>
              <Route exact path="/register" element={<SignUpChoose/>}/>
              <Route exact path="/makeSubmission" element={<StudentMakeSubmission/>}/>
              <Route exact path="/createSubmission" element={<AdminCreateSubmission/>}/>
              <Route exact path="/login" element={<Login/>}/>
              </Routes>
          </Router>
    </div>
  )
}
