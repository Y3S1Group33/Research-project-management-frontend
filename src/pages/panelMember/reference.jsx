import React, { useState, useEffect } from "react";
import axios from "axios";

function Reference() {
  const [referenceDetails, setReferenceDetails] = useState([]);
  const [refernce, setReferences] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [id, setID] = useState("");

  const [referenceData, setReferenceData] = useState([]);

  useEffect(() => {
    fetch(`https://floating-meadow-01028.herokuapp.com/api/reference`)
      .then((response) => response.json())
      .then((responseData) => {
        setReferenceDetails(responseData);
      });
    console.log(referenceDetails);
  }, []);

  useEffect(() => {
    fetch(`https://floating-meadow-01028.herokuapp.com/api/reference/${id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setReferenceData(responseData);
      });
    console.log(referenceData);
  }, []);

  let data = {
    type: type,
    title: title,
    description: refernce,
  };

  let submitReference = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `https://floating-meadow-01028.herokuapp.com/api/reference/${id}`,
        data
      );
      if (res) {
        console.log(data);
        alert("Reference added successfully");
        window.location.href = "/panelMember/reference";
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReference = () => {
    if (window.confirm("Do you want to delete record")) {
      axios
        .delete(`https://floating-meadow-01028.herokuapp.com/api/reference/${id}`)
        .then((res) => {
          alert("Deleted successfuly");
          window.location.href = "/panelMember/reference";
        });
    } else {
      alert("Record not deleted");
    }
  };

  let addReferences = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://floating-meadow-01028.herokuapp.com/api/reference", data);
      if (res) {
        console.log(data);
        alert("Reference created successfully");
        window.location.href = "/panelMember/reference";
        
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      alert("Error occured in the process");
      console.log(err);
    }
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {referenceDetails.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => setID(item._id)}
                  >
                    View
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Update references
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setID(item._id)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <div class="modal-body">
                          <label>Enter Type</label>
                          <input
                            placeholder="enter your type"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setType(e.target.value)}
                            required
                          />
                        </div>

                        <div class="modal-body">
                          <label>Enter Title</label>
                          <input
                            placeholder="enter your title"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>

                        <div class="modal-body">
                          <label>Enter references</label>
                          <input
                            placeholder="enter your description"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setReferences(e.target.value)}
                            required
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={submitReference}
                          >
                            Save changes
                          </button>

                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={deleteReference}
                          >
                            Delete
                          </button>
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

      <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addReferences"
                    onClick={() => setID(item._id)}
                  >
                    Add References
                  </button>

                  <div
                    class="modal fade"
                    id="addReferences"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Add references
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>

                        <div class="modal-body">
                          <label>Enter Type</label>
                          <input
                            placeholder="enter your type"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setType(e.target.value)}
                            required
                          />
                        </div>

                        <div class="modal-body">
                          <label>Enter Title</label>
                          <input
                            placeholder="enter your title"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>

                        <div class="modal-body">
                          <label>Enter references</label>
                          <input
                            placeholder="enter your description"
                            type="text"
                            className="form-control"
                            id="roomType"
                            onChange={(e) => setReferences(e.target.value)}
                            required
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={addReferences}
                          >
                            Save
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  );
}

export default Reference;
