import React, { useState, useEffect } from 'react'

function TopicsEvaluate() {

const [topicDetails, setTopicDetails] = useState("");

useEffect(() => {
        fetch(`http://localhost:5000/api/researchTopic`)
          .then((response) => response.json())
          .then((responseData) => {
            setTopicDetails(responseData);
          });
        console.log(topicDetails);
      }, []);

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
  {topicDetails.map((item) => {
            return (
              <tr>
                <td>{item.studentGroupId}</td>
                <td>{item.topic}</td>
                <td>{item.researchPanelId}</td>
                <td>{item.supervisor}</td>
                <td>{item.coSupervisor}</td>
                <td>{item.feedback}</td>
                <td>{item.status}</td>
                <td>
                  <button  className="btn btn-success">
                  <Link to={`/adminUpdateReservations/${item.id}`} className="btn btn-success">View Details
                            </Link>
                  </button>
                  
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
