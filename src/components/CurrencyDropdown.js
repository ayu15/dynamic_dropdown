import React from 'react';
import axios from 'axios';
import DropDown from './DropDown';

class CountryDropdown extends React.Component{
    state = {
        currency: []
    }

    async componentDidMount(){
        const resp = await axios.get('./data2.json')
        this.setState({
            currency: resp.data.currency.map(
                (curr) => {
                    return curr.name;
                }
            )
        })
    }
    
    render(){
        return(
            <>
                <DropDown label="Currency" options={this.state.currency} />
            </>
        );
    }
}

export default CountryDropdown;