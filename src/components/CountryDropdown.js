import React from 'react';
import axios from 'axios';
import DropDown from './DropDown';

class CountryDropdown extends React.Component{
    state = {
        country: []
    }

    async componentDidMount(){
        const response = await axios.get('./data1.json')
        this.setState({
            country: response.data.country.map(
                (cont) => {
                    return cont.name;
                }
            )
        })
    }

    render(){
        return(
            <>
                <DropDown label="Country" options={this.state.country} />
            </>
        );
    }
}

export default CountryDropdown;