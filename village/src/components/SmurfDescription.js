import React from 'react'

function SmurfDescription(props) {
    const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.apple)

    if (!smurf) {
        return <h3>Calling Your Smurf Over...</h3>
    }
    return (
      <div className="individualSmurf">
         <h2>{smurf.name}</h2>
         <strong>{smurf.height}cm tall</strong>
         <p>{smurf.age} smurf years old</p>
      </div>
    )
}

export default SmurfDescription