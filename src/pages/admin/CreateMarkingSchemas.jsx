import React, {useState} from 'react';
import {Button, Card, FormGroup, TextField} from "@mui/material";
import MarkingSchemaUpload from "./MarkingSchemaUpload";

const CreateMarkingSchemas = () => {
    const[title,setTitle]=useState("")
    return (
        <div>

            <FormGroup style={{marginLeft:"200px",marginRight:"200px",marginTop:"100px"}}>
                <Card>

                <TextField
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    style={{marginLeft:"30px"}}
                    variant="outlined"
                    margin="normal"
                    required
                    label={"marking scheme Title"}
                    name="markingSchemaTitle" />
                <br />

                <br />
           <MarkingSchemaUpload title={title}  />
                </Card>
            </FormGroup>
        </div>
    );
};

export default CreateMarkingSchemas;