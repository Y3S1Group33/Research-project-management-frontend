import React, {useEffect, useState} from "react";
import axios from "axios";

export default function SupervisorMarkingSchemes() {
    const [submissionDetails, setSubmissionDetails] = useState([]);
    const [evaluate, setEvaluate] = useState("");
    const [id, setID] = useState("");

    const [sumbissionData, setPresentationData] = useState([]);

    useEffect(() => {
        fetch(`https://floating-meadow-01028.herokuapp.com/api/markingSchema`)
            .then((response) => response.json())
            .then((responseData) => {
                setSubmissionDetails(responseData);
            });
        console.log(submissionDetails);
    }, []);

    return (
        <div className="container">
            <br></br>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">submitted Date</th>
                    <th scope="col">Marking Scheme</th>
                </tr>
                </thead>
                <tbody>
                {submissionDetails.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.submittedDate}</td>
                            <td><a href={item.imageUrl} role="button">View Marking</a></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );


}