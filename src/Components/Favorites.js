import React from 'react'

const Favorites = (props) => {
 //some state here to grab favorites
 const [faves, setFaves] = React.useState([])

    return(
        <div>
         <h3>Favorite Song List</h3>
            <>{faves}</>
        </div>
    )
}

export default Favorites