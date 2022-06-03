import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import studentRegistration from "../../../assests/researchProject.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
      marginLeft: '30px',
    marginTop: '20px',
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  maingrid: {
    width: "86%",
    marginLeft: '40px',
    marginTop: '20px'
  },
}));


function ResearchProject() {
  const classes = useStyles();

const [studentGroups, setStudentGroups] = useState("")    
 const [researchTopics, setResearchTopics] = useState("")

//  let data = {
//     studentGroupId: studentGroupId,
//     topic: topic,
//     researchPanelId: researchPanelId,
//     supervisor: supervisor,
//     coSupervisor: coSupervisor,
//     feedback: feedback,
//     status: status
// }


useEffect(() => {
    axios.get("http://localhost:5000/api/researchTopic/:id").then(res => {
        console.log(res.data)
        setResearchTopics(res.data)
    }).catch(err => {
        console.log(err);
    })
}, [])

  return (
    <div>
    <Card className={classes.maingrid}>
    <Grid container justifyContent="space-around">


<Grid item xs={4} style={{marginTop:"20px"}}>
    <form className={classes.root} >
    <h2>Research Project</h2>
      <TextField 
      id="studentGroupId" 
      label="Student Group ID" 
      value={researchTopics.studentGroupId}
      />
      <br></br>
      <TextField 
      id="topic" 
      label="Research Topic" 
      value={researchTopics.topic}

      />
      <br></br>
      <TextField 
      id="researchPanelId" 
      label="Research Panel ID" 
      value={researchTopics.researchPanelId}

      />
      <br></br>
      <TextField 
      id="supervisor" 
      label="Supervisor" 
      value={researchTopics.supervisor}
     
      />
      <br></br>
      <TextField 
      id="coSupervisor" 
      label="Co-Supervisor" 
      value={researchTopics.coSupervisor}

      />
      <br></br>
      <TextField 
      id="feedback" 
      label="Feedback" 
      aria-readonly
      value={researchTopics.feedback}

      />
      <br></br>
      <TextField 
      id="Status" 
      label="status" 
      value={researchTopics.status}

      />
      <br></br>
      <div className={classes.button}>
      <a href="/student/topicRequest">
      <Button variant="contained" color="primary" >
      Re-Send Request
      </Button>
      </a>
      </div>
    </form>
    </Grid>
    <Grid item xs={4}>

<img  className="image" src={studentRegistration} alt="60" />
</Grid>
</Grid>
    </Card>
  </div>
    
)}

export default ResearchProject;