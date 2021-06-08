import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getNameQuery } from '../queries/queries';

class NameDetails extends Component {
    displayNameDetails(){
        const { name } = this.props.data;
        if(name){
            return(
                <div>
                    <h2>{ name.name }</h2>
                    <p>{ name.location }</p>
                    <p>{ name.user.name }</p>
                    <p>All names by this user:</p>
                    <ul className="other-names">
                        { name.user.names.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
           //return( <div>No name selected...</div> );
        }
    }
    render(){
        return(
            <div id="name-details">
                { this.displayNameDetails() }
            </div>
        );
    }
}

export default graphql(getNameQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.nameId
            }
        }
    }
})(NameDetails);