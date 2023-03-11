import { Component } from "react";

import {auth} from "./firebase";

class UserAuth extends Component {
    state = {email :'', password : ''}

    onChangeUser = e => {
        this.setState({email : e.target.value})
    }
    onChangePassword = e => {
        this.setState({email : e.target.value})
    }

    signUp = e => {
        e.preventDefault()
        const {email,password} = this.state
        auth.creteUserWithEmailAndPassword(email,password).then( user => console.log(user)).catch(err => console.log(err))
    }

    signIn = e => {
        e.preventDefault()
    }



    render() {
        const {email,password} = this.state
        console.log(email, password)
        return (
            <div>
            <form autoComplete='on'>
                <h1>Authentication</h1>
                <input type="email"  onClick={this.onChangeUser} name="email" placeholder='email'/> <br/>
                <input type="password"
                  onClick={this.onChangePassword}
                   name="password"
                    placeholder='password'
                     /> <br/>
                     
                <button onClick={this.signIn}>Sign In</button> &nbsp;&nbsp; 
                <button onClick={this.signUp}>Sign Up</button>
            </form>
        </div>
        )
    }
}
export default UserAuth;