import React from "react";

class Friend extends React.Component {
    render() {
        const {name, age, city} = this.props
        
        return (
            <>
                <h3>{name}</h3>
                <h4>{age}</h4>
                <h4>{city}</h4>
                <h4>------------------------</h4>
            </>
        )
    }
}

export default Friend