import { Link } from "react-router-dom";
import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from 'bootstrap';




class Navbar extends React.Component{

render(){
    return(
        
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

}


export default Navbar;