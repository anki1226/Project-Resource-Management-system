import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() { 
        return ( <div>
            <ul>
                {/* <li>
                    <Link to = "/">Logo</Link>
                </li> */}
                <li>
                    <Link to = "/Projects">Manage Projects</Link>
                </li>
                <li>
                    <Link to="/Resources">Manage Resources</Link>
                </li>
            </ul>
        </div> );
    }
}
 
export default Nav;