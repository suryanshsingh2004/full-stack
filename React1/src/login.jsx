import { useState } from "react";
import './App.css'
export const LoginForm = () => {
  const [data, setData] = useState({ email: "Initial", password: "Initial" });

  return (
    <><form>

      <label htmlFor="mail" className="mail"><b>Email: </b></label>
      <input className="mail" type="email" id="mail" name="mail" placeholder="Enter your mail" required onChange={(event) => setData({ ...data, email: event.target.value })} />
      <br />
      <br />
      <label htmlFor="password"><b>Password: </b></label>
      <input type="password" id="password" name="password" required placeholder="Enter password" onChange={(event) => setData({ ...data, password: event.target.value })} />
      <br />
      <br />
      
      <button className="button" type="submit"><b>Submit</b></button>
    </form>
      <h2 ><b>The entered email is {data.email} </b></h2>
      <h2><b>and the password is {data.password}</b></h2>
    </>
  )
};
export default LoginForm;