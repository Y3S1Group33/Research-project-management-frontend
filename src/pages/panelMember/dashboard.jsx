import React, { useState, useEffect } from "react";
import presentationIMG from '../../../public/images/presentations.webp'
import researchIMG from '../../../public/images/reseachs.webp'
import submissionsIMG from '../../../public/images/submission.webp'

export default function dashboard() {

  const [submissionDetails, setSubmissionDetails] = useState([]);

  useEffect(() => {
    fetch(`https://floating-meadow-01028.herokuapp.com/api/makeSubmission`)
      .then((response) => response.json())
      .then((responseData) => {
        setSubmissionDetails(responseData);
      });
    console.log(submissionDetails);
  }, []);

  return (
    <div class="container" style={{ marginTop:"20px"}}>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={presentationIMG} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Presentations</h5>
        <p class="card-text">presentation card body</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={researchIMG} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Researches</h5>
        <p class="card-text">Research card body</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={submissionsIMG} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Submissions</h5>
        <p class="card-text">No of submissions - {submissionDetails.length}</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
