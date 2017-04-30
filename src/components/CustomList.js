import React, { Component } from 'react';
import './CustomList.css';

class CustomList extends Component {

    constructor(props) {
        super(props);

        if (props.items) {
            this.state = {
                items: props.items.map((item) => <li key={'uk-' + item}>{item}</li>)
            };
        }
    }

    render() {
        let list = 'Empty List';

        if (typeof this.props.items !== 'undefined' && this.props.items.length) list = this.state.items;
        
        const markup = (
            <ul className="customList">{list}</ul>
        );

        return markup;
    }
}

export default CustomList;
