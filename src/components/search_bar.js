import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    // setting state seems unnecessary here

    render(){
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term} 
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({
            term: term
        });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;