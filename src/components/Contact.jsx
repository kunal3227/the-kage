import React from 'react'

export const Contact = (props) => {
  return (
    <div>
        <h2>{props.location}</h2>
        <h2>+91 {props.number}</h2>
        <div>
            <button>Instagram</button>
            <button>facebook</button>
            <button>Zomato</button>
        </div>
    </div>
  )
}
