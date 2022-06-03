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

export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
                  //Panel member routes
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              <Route exact path="/panelMember/reference" element={<Reference />} />
              <Route exact path="/panelMember/dashboard" element={<PanelMemberDashboard />} />
              <Route exact path="/panelMember/chat" element={<PanelMemberChat />} />
               <Route exact path="/panelMember/presentation" element={<PresentationEvaluate />} />

                  //Supervisor/Co Supervisor routes
              <Route exact path="/supervisor/dashboard" element={<SupervisorDashboard />} />
              <Route exact path="/supervisor/topics" element={<SupervisorTopicsEvaluate />} />
              <Route exact path="/supervisor/teams" element={<Teams />} />
              <Route exact path="/supervisor/documentEvaluation" element={<DocumentEvaluation />} />


              </Routes>
          </Router>
    </div>
  )
}
