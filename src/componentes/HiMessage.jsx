import React from "react";

export default class HiMessage extends React.Component {
    render(){
        return (
        <h2>
            Hi everibody!! {this.props.mensagem}
        </h2>
        )
    }
}