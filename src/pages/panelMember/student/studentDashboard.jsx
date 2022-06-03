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
    width: '100%',
    marginTop: '20px'
  },
  root1: {
    marginTop: '20px',
    marginLeft: '150px',
    marginRight: '150px',
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
        <Typography className={classes.title} color="Fantasy" gutterBottom>
          <b>Document Submission</b>
        </Typography>
        <StudentMakeSubmission />
        
      </CardContent>
    </Card>
    <div>
    {/* {refernces.map((r) => {
            return ( */}
    <Card className={classes.root}>
    
      <CardContent>
        <Typography className={classes.title} color="Fantasy" gutterBottom>
          <b>References</b>
          <h4><b>Type: </b> {refernces.type}</h4>
          <h4><b>Title: </b> {refernces.title}</h4>
          <h4><b>Description: </b>{refernces.description}</h4>
        </Typography>
      </CardContent>
      
    </Card>
    {/* );
          })} */}
    </div>
    </div>
  );
}

export default StudentDashboard;