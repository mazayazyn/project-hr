import {Snackbar, Button} from "@mui/material";
import AuthService from "../services/auth.service"
import {useNavigate} from "react-router-dom"
import React, {useEffect} from "react"
import jwtDecode from "jwt-decode";
import MuiAlert from '@mui/material/Alert';

function Index() {

    const [email, setEmail] = React.useState();
    const [role, setRole] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [token, setToken] = React.useState();
    const navigate = useNavigate();

    useEffect(() => {
      const emails = AuthService.getCurrentEmail();
      const roles = AuthService.getCurrentRole();
      setEmail(emails);
      setRole(roles);
    }, []);

    const handleLogout = () => {
      const logout_trigger = AuthService.logout();
      if(logout_trigger){
        setMessage("Logout Successful")
        setOpen(true);
        window.setTimeout(navigateToSigin, 3000);
      }
    }
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const navigateToSigin = () => {
      navigate("/signin");
      window.reload.page();
    }

    return (
        <>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
          <h1>Hello, {email}</h1>
          <h4>you have role to {role}</h4>
          <Button variant="contained" onClick={handleLogout}>Log Out</Button>
        </>
    );
}

export default Index;
