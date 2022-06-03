import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//common
import NavBar from "./NavBar/navBar" 

//panel member
import TopicsEvaluate from '../pages/panelMember/topicsEvaluate'
import StudentGroup from '../pages/panelMember/student/studentGroup';
import ResearchTopic from '../pages/panelMember/student/researchTopic';
import Reference from '../pages/panelMember/reference'
import PanelMemberDashboard from '../pages/panelMember/dashboard'
import PanelMemberChat from '../pages/panelMember/chat'
import PresentationEvaluate from '../pages/panelMember/presentationEvaluate'
import Login from "../pages/home/Login";
import StudentSignUp from "../pages/student/StudentSignUp";
import StaffSignUp from "../pages/staff/StaffSignUp";
import SignUpChoose from "../pages/home/SignUpChoose";
import StudentMakeSubmission from "../pages/student/StudentMakeSubmission";
import AdminCreateSubmission from "../pages/admin/AdminCreateSubmission";


//supervisor co supervisor
import SupervisorDashboard from "../pages/supervisor/supervisorDashboard";
import SupervisorTeams from "../pages/supervisor/supervisorTeams";
import SupervisorMarkingSchemes from "../pages/supervisor/supervisorMarkingSchemes";
import TeamChat from "../pages/supervisor/teamChat";
import TopicsConfirmation from "../pages/supervisor/topicsConfirmation";
import SupervisorDocuments from "../pages/supervisor/supervisorDocuments";
import ResearchProject from '../pages/panelMember/student/researchProject';
import SetPanelMembers from "../pages/staff/SetPannelMembers";
import DisplayStudentsView from "../pages/admin/DisplayStudentsView";


export default function App() {
  return (
    <div>
      <NavBar />

      <Router>
              <Routes>
                  {/*Panel member routes*/}
              <Route exact path="/panelMember/topics" element={<TopicsEvaluate />} />
              <Route exact path="/panelMember/reference" element={<Reference />} />
              <Route exact path="/panelMember/dashboard" element={<PanelMemberDashboard />} />
              <Route exact path="/panelMember/chat" element={<PanelMemberChat />} />
              <Route exact path="/panelMember/presentation" element={<PresentationEvaluate />} />
              
              {/* Student Routes */}
              
              <Route exact path="/student/studentGroup" element={<StudentGroup />} />
              <Route exact path="/student/topicRequest" element={<ResearchTopic />} />
              <Route exact path="/student/researchProject" element={<ResearchProject />} />
              <Route exact path="/panelMember/setPanelMember" element={<SetPanelMembers />}  />

                  {/*Supervisor-Co Supervisor routes*/}
              <Route exact path="/supervisor/dashboard" element={<SupervisorDashboard />} />
              <Route exact path="/supervisor/teams" element={<SupervisorTeams />} />
              <Route exact path="/supervisor/topics" element={<TopicsConfirmation />} />
              <Route exact path="/supervisor/document" element={<SupervisorDocuments />} />
              <Route exact path="/supervisor/markingSchemes" element={<SupervisorMarkingSchemes />} />
              <Route exact path="/supervisor/teams/chat/:id" element={<TeamChat />} />

                  {/*Admin/ student/ staff routes*/}

              <Route exact path="/registerStudent" element={<StudentSignUp/>}/>
              <Route exact path="/registerStaff" element={<StaffSignUp/>}/>
              <Route exact path="/register" element={<SignUpChoose/>}/>
              <Route exact path="/makeSubmission" element={<StudentMakeSubmission/>}/>
              <Route exact path="/createSubmission" element={<AdminCreateSubmission/>}/>
              <Route exact path="/login" element={<Login/>}/>
                  <Route exact path="/admin/viewStudents" element={<DisplayStudentsView/>}/>

              </Routes>

          </Router>
    </div>
  )
}
