import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import firebaseConfig from './firebase'
import { AuthContext } from './Auth';
import {UserDetails} from './userDetails'; 

const Login = ({ history }) => {
    const handleLogIn = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }
        catch (error) {
            alert(error)
        }
    }, [history]);
    const {currentUser} = useContext(AuthContext);
    if (currentUser) { localStorage.setItem('userId', currentUser.email);}
 
    if(currentUser){
        return <Redirect to="/" />
        
    }

    return (
        <div className="Login_Form">
            <h1 className="Login_Header">Log In</h1>
            <form className="Login_Fields" onSubmit={handleLogIn}>
                <label htmlFor="">Email 
                <input type="email" name="email" placeholder="Email"/>
                </label>
                <label htmlFor="">Password 
                <input type="password" name="password" placeholder="Password"/>
                </label>
                <button className="Login_Button" type="submit">Log In</button>
            </form>
        </div>
    )
}
export default withRouter(Login)
