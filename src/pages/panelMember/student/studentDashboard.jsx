import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StudentMakeSubmission from '../../student/StudentMakeSubmission';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    marginLeft: '100px',
    marginRight: '100px'
  },
  root1: {
    marginTop: '20px',
    marginLeft: '180px',
    marginRight: '180px',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
  },
  pos: {
    marginBottom: 12,
  },
});

 function StudentDashboard() {
  const classes = useStyles();
  const [refernces, setReferences] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/reference`)
      .then((response) => response.json())
      .then((responseData) => {
        setReferences(responseData);
      });
    console.log(refernces);
  }, []);

  return (
      <div>
      
    <Card className={classes.root1}>
      <CardContent>
        <StudentMakeSubmission />
        
      </CardContent>
    </Card>
    <br></br>
    <div> 
    <div class="card" style={{ height: "400px", overflow: 'scroll', width: "90%", marginLeft: '100px', marginRight: '100px'}} >
    {refernces.map((references) => {
            return (
  <div class="card-body">
  <h5><b>Type: </b> {refernces.type}</h5>
    <h5><b>Title: </b> {refernces.title}</h5>
    <h5><b>Description: </b>{refernces.description}</h5>
  </div>
  );
          })}
</div>
    {/* <div className="card" style="width: 18rem;">
        <div class="card-body">
        <b>References</b>
          <h5><b>Type: </b> {refernces.type}</h5>
          <h5><b>Title: </b> {refernces.title}</h5>
          <h5><b>Description: </b>{refernces.description}</h5>
        </div>
    </div> */}

    </div>
    </div>
  );
}

export default StudentDashboard;