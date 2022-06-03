import React, {useState} from 'react';
import {TextField, Typography, Button, Card} from "@mui/material";
import axios from "axios";
const AdminCreateSubmission = () => {

    const [title,setTitle]=new useState("");
    const [startDate,setStartDate]=useState(null);
    const [endDate,setEndDate]=useState(null);
    // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };




    const postAdminSubmission=()=>{
        axios.post("https://floating-meadow-01028.herokuapp.com/api/adminSubmission",{
            title,
            startDate,
            endDate
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

    }
    return (
        <div>

            <TextField
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                label={"Submission Title"}
                name="submissionTitle" />
            <br />
            {/*<DateTimePicker*/}
            {/*    label="Date&Time picker"*/}
            {/*    value={value}*/}
            {/*    onChange={handleChange}*/}
            {/*    renderInput={(params) => <TextField {...params} />}*/}
            {/*/>*/}
            <TextField
                onChange={(e)=>{
                    setStartDate(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                label={"Start Date"}
                name="startDate" />
            <br />
            <TextField
                onChange={(e)=>{
                    setEndDate(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                label={"End Date"}
                name="endDate" />
            <br />
            <Button onClick={postAdminSubmission} variant={"contained"} size={"large"} color={"primary"}>Create Submission</Button>
        </div>
    );
};

export default AdminCreateSubmission;