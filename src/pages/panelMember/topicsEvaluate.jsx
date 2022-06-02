import React, { useState, useEffect } from 'react'

function TopicsEvaluate() {

const [topicDetails, setTopicDetails] = useState([]);
const [feedback, setFeedback] = useState("");

useEffect(() => {
        fetch(`http://localhost:5000/api/researchTopic`)
          .then((response) => response.json())
          .then((responseData) => {
            setTopicDetails(responseData);
          });
        console.log(topicDetails);
      }, []);

      let submitFeedback =() =>{
          
      }

    return (
        <div className="container">
            <br></br><br></br>
           <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Group ID</th>
      <th scope="col">Topic</th>
      <th scope="col">Research Panel ID</th>
      <th scope="col">Supervisor</th>
      <th scope="col">Co-Superviso</th>
      <th scope="col">Feedback</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {topicDetails.map((item, index) => {
            return (
              <tr>
                   <td>{index+1}</td>
                <td>{item.studentGroupId}</td>
                <td>{item.topic}</td>
                <td>{item.researchPanelId}</td>
                <td>{item.supervisor}</td>
                <td>{item.coSupervisor}</td>
                <td>{item.feedback}</td>
                <td>{item.status}</td>
                <td>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Add topic evaluation
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Evaluate Topic Selection for group id {item.studentGroupId}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <label >Enter the Feedback</label>
          <input
            placeholder="Enter the Feedback"
            type="text"
            className="form-control"
            id="roomType"
            onChange={(e) => setFeedback(e.target.value)}
            required />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={submitFeedback}>Save changes</button>
      </div>
    </div>
  </div>
</div>
                  
                </td>
              </tr>
            );
          })}
  </tbody>

</table>
        </div>
    )
}

export default TopicsEvaluate
