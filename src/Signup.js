import React,{useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import firebaseConfig from './firebase'
import './Main.css'

const Signup = ({history}) =>{
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await firebaseConfig
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }
        catch(error){
            alert(error)
        }
    },[history]);

    return(
        <div>
            <h1 className="SignUp_Header">Sign Up</h1>
            <form className="SignUp_Fields" onSubmit={handleSignUp}>
                <label>Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>Pasword 
                    <input type="password" name="password" placeholder="Password"/>
                </label>
                <button className="SignUp_Button" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(Signup);
