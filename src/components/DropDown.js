import React from 'react';

class DropDown extends React.Component{
    render(){
        let optionsItems = this.props.options.map(
                            (opt) => {
                                return(
                                    <option key={opt.id}>{opt}</option>     
                                )
                            })
        return(
            <div className="dropdown-wrapper" style={{margin: "20px"}}>
                <label style={{paddingRight: "15px"}}>{this.props.label}</label>
                <select>
                    {optionsItems}
                </select>
            </div>
        );
    }
}

export default DropDown;