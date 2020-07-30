import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Redirect } from 'react-router-dom'

class Login extends Component{
  state = {
    inputEmail: '',
      password: '',
      isLoginArtist:false,
      isLoginCustomer:false,
      isLoginAdmin:false, 
  }
  componentDidMount() {
    axios.defaults.headers.common = {'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjIyN2JkY2U5YmMxYzAwMDQ0ZDc5ZjAiLCJpYXQiOjE1OTYwOTU0NTIsImV4cCI6MTU5NjcwMDI1Mn0.6KnXDGA9irS31RinwY-aUth0RHHn3f9O2x41TooyQlc'}`}
    axios.get('https://whispering-harbor-77428.herokuapp.com/customer/profile')
      .then(r => console.table(r.data))
  }
  inputPasswordHandler = (e)=> {
    this.setState({password:e.target.value})
  }
  inputChangeHandler=(e)=>{
    this.setState({inputEmail:e.target.value})
  }
    submitHandler = () => {
        console.log(this.state.inputEmail,this.state.password)
        const data = {
            // username: 'inshafcustomer',
            // password: 'abc123customer'
            username: this.state.inputEmail,
            password:this.state.password
        }
        axios.post('https://whispering-harbor-77428.herokuapp.com/users/login', data).
            then(r => {
                if (r.data.role === 'customer')
                    this.setState({ isLoginCustomer: true })
                if (r.data.role === 'admin')
                    this.setState({ isLoginAdmin: true })
                if (r.data.role === 'artist')
                    this.setState({isLoginArtist:true})
            }
        )

      
  }

  render() {
      let redirect = null;
      if (this.state.isLoginArtist) {
          redirect = <Redirect to="/Artist" />;
      }
      if (this.state.isLoginCustomer) {
        redirect = <Redirect to="/Customer" />;
      }
      if (this.state.isLoginAdmin) {
        redirect = <Redirect to="/Admin" />;
    }
    return (
      <div className="App">
            <p>Starter</p>
            {redirect}
        <input
          type="text"
          value={this.state.inputEmail}
          onChange={this.inputChangeHandler} />
        <input
          type="password"
          value={this.state.password}
          onChange={this.inputPasswordHandler}
        />
        <button onClick={this.submitHandler}>submit</button>

      </div>
    );
  }
 
}

export default Login;
