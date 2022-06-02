import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//common
import NavBar from "./NavBar/navBar" 

//panel member
import TopicsEvaluate from '../pages/panelMember/topicsEvaluate'
import Reference from '../pages/panelMember/reference'
import PanelMemberDashboard from '../pages/panelMember/dashboard'

export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              <Route exact path="/panelMember/reference" element={<Reference />} />
              <Route exact path="/panelMember/dashboard" element={<PanelMemberDashboard />} />
              
              </Routes>
          </Router>
    </div>
  )
}
