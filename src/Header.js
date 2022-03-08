import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    emoji = () => {
        return (<p>Emoji du jour: 😀</p>)
    }

    render() { 
        return (
            <div>
                <h1>Bonjour {this.props.name}</h1>
                {this.emoji()}
            </div>
         );
    }
}
 
export default Header;