import React from 'react'

export const AboutUs = (props) => {
  return (
    <div>
        <img src={props.logo} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}
