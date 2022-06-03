// import React, {useState} from 'react';
// import axios from "axios";
// import {Button, TextField} from "@mui/material";
//
// const Login = () => {
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");
//
//     let handleSubmit = async (e) => {
//         e.preventDefault();
//
//         const StudentResponse= await axios.get("https://floating-meadow-01028.herokuapp.com/api/student/"+email);
//         const StaffResponse=await axios.get("https://floating-meadow-01028.herokuapp.com/api/staff/"+email);
//         console.log("res:"+ StudentResponse.data);
//         console.log("staff res:"+ StaffResponse.data);
//         if(StudentResponse.data!==null && email!==""){
//             if (password === StudentResponse.data[0].password) {
//                 alert("Logged In Successfully");
//                 localStorage.setItem("loggedInUser", JSON.stringify(StudentResponse.data));
//                 window.location.href = "/student/dashboard";
//             } else {
//                 alert("Incorrect password");
//
//             }
//         }else if(StaffResponse.data!==null && email!==""){
//             if (password === StaffResponse.data[0].password) {
//                 alert("Logged In Successfully");
//                 localStorage.setItem("loggedInUser", JSON.stringify(StaffResponse.data));
//                 console.log(StaffResponse.data[0].role)
//                 window.location.href = `/${StaffResponse.data[0].role}/dashboard`;
//             } else {
//                 alert("Incorrect password for staff");
//             }
//         }else{
//             alert("please try again!");
//         }
//
//     };
//     return (
//         <div className="container">
//             <h1 className="text-center">Login</h1>
//
//             <form className="form" >
//                 <div className="form-group">
//
//                     <TextField
//                         label="Email"
//                         type="text"
//                         fullWidth
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//
//
//
//                 <div className="form-group">
//
//                     <TextField
//                         label="password"
//                         type="text"
//                         fullWidth
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//
//                 <br></br>
//                 <Button type="submit" onClick={handleSubmit} variant={"contained"} size={"large"} color={"primary"}>
//                     Login
//                 </Button>
//             </form>
//             <br></br>
//
//         </div>
//     );
// };
//
// export default Login;