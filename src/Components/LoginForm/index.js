import React, { Component, Fragment } from 'react';

import './index.scss';

class LoginForm extends Component {
    constructor(props) {

        super(props);

        this.state = { username: '' };

    }

    mySubmitHandler(event) {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    myChangeHandler(event) {
        this.setState({ username: event.target.value });
    }

    render() {

        return (
            <Fragment>

                <div className="cart-cell">
                    <div className="content-left">
                        <img src="./logo/login.svg" />
                    </div>

                    <form onSubmit={this.mySubmitHandler}>
                        <h1>Hello {this.state.username}</h1>
                        <p>Enter your name, and submit:</p>
                        <input type='text' onChange={() => this.myChangeHandler()} />

                        <input type='submit' />
                    </form>

                    {/* <div className="content-right">
                           <h1>Login as a Admin user</h1> 
                           <input type="text" placeholder="Enter Username" name="username" required></input>
                           <input type="password" placeholder="Enter Password" name="password" required></input>
                           <button type="submit">Login</button>
                           <p>Forget your password?</p>
                           <h4>Get help signed in.</h4>
                           <h5>Terms of use. privacy policy</h5>  
                       </div> */}


                    {/* <form onSubmit={this.mySubmitHandler}>
                             <h1>Hello {this.state.username} {this.state.age}</h1>
                                 <p>Enter your name:</p>
                                     <input type='text' placeholder="Enter Username" name='username'onChange={this.myChangeHandler} />
                                         <p>Enter your age:</p>
                                             <input
                                              type='text' name='age' placeholder="Enter Age" onChange={this.myChangeHandler} />
                                         <br/>
                                         <br/>
                                        <input type='submit' />
                                        </form> */}
                </div>




            </Fragment>
        );
    }
}

export default LoginForm;
