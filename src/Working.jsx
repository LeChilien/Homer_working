import React, { Component } from 'react';

class Working extends Component {
   

    render() {
        return (
            <div className="Working">
                <button onClick={this.props.change} 
                >
                {this.props.activity}
                </button>   
            </div>
        );
    }
}


export default Working;