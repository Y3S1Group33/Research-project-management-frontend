import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//common
import NavBar from "./NavBar/navBar" 

//panel member
import TopicsEvaluate from '../pages/panelMember/topicsEvaluate'
import StudentGroup from '../pages/panelMember/student/studentGroup';
import ResearchTopic from '../pages/panelMember/student/researchTopic';

export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              <Route exact path="/student/studentGroup" element={<StudentGroup />} />
              <Route exact path="/student/topicRequest" element={<ResearchTopic />} />
              </Routes>
          </Router>
    </div>
  )
}
