import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const initialValues = {  email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const [password , setPassword] = useState('')
  const inputemail  =formValues.email;

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(password != null && Number(password) === Number(formValues.password) ){
      console.log("Already a player");
      <div>You Rock it</div>
      navigate("/")
    }else if(password !== null && Number(password) !== Number(formValues.password) ){ 
      console.log("ReEnter password")
    }else {
      // e.preventDefault()
      await axios.post("/api/addUser" ,formValues);
      navigate('/')
      console.log("New USER ");
    }
  };
    useEffect(() => {
      const getDataById = async () => {
        const { data } = await axios.get(`/api/getUser/${inputemail}`)
        console.log(data)
        setPassword(data.password)
      }
    
    getDataById()

  },[inputemail])
  


  useEffect(() => {
    console.log(formErrors);
    console.log("pass",password);
    console.log("form",formValues.password)

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      
  
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

    

  return (
    <div className="login-container">

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;