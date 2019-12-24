import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() { 
        return ( <div className="wrapper fadeInDown">
        <div id="formContent">
        {/* https://bootsnipp.com/snippets/dldxB */}
          <div className="fadeIn first">
           <h3 className="text-info"></h3>
          </div>
          <form>
                <div className="form-group">
                    <label for="username" className="text-info username">Username:</label>
                    <input type="text" id="login" className="fadeIn second" name="login"/>
                </div>
                <div className="form-group">
                    <label for="username" className="text-info password">Password:</label>
                    <input type="text" id="password" className="fadeIn third" name="login"/>
                </div>
                    <div className="form-group">
                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </div>
            </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>            
                </div>
            </div>);
            }
}
 
export default Login;