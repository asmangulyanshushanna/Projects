import React from 'react';
import { Redirect } from 'react-router-dom';
import FormLogin from './login_form';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', password: '', redirect: false}
    }
    loggingIn = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const data = {email,
                password
            }
        try {
            const response = await fetch("http://localhost:3000/login", {
               method: "POST",
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               },
               body:  JSON.stringify({reviews:data})
            });
            if(response.ok) {
             this.setState({redirect: !this.state.redirect})
           } else {
            throw new Error("Failed")
           }
           } catch(error) {
             console.log(error);
           }
           }
    
    render()
    {
        return(
            <div>
            <FormLogin loggingIn={this.loggingIn}/>
            {this.state.redirect && <Redirect to='/hotels'/>}
            </div>
        )
};
}
  