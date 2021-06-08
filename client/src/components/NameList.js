import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getNamesQuery } from '../queries/queries';

// components
import NameDetails from './NameDetails';

class NameList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayNames(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading names...</div> );
        } else {
            return data.names.map(name => {
                return(
                    <li key={ name.id } onClick={ (e) => this.setState({ selected: name.id }) }>{ name.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="name-list">
                  
                </ul>
                <NameDetails nameId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getNamesQuery)(NameList);