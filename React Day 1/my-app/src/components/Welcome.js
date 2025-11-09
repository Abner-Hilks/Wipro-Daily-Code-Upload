import React  from "react";

function Welcome(props) {
    return (
            <div>
                <h2> Hello, {props.name}!</h2>
                <p> Welcome to oour first react component </p>
            </div>
    );
    
}//closing function

export default Welcome; // exporting function