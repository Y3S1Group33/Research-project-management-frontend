import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//common
import NavBar from "./NavBar/navBar" 

//panel member
import TopicsEvaluate from '../pages/panelMember/topicsEvaluate'

export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              </Routes>
          </Router>
    </div>
  )
}
