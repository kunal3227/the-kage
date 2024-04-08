import React from 'react'
/* make a form if statement to show logo rather than name */

export const Review = (props) => {
    const list1 = props.myList;

   function Card(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <h3>{props.myFrom}</h3>
            <p>{props.review}</p>
        </div>
    )
   }

  return (
    <div>
        <h2>{props.title}</h2>
        <ul>
            {
            list1.map((i)=>{
                return(
                <Card name={i[1]} img={i[2]} myFrom={i[3]} review={i[4]} key={i[0]} />
                );
            })
            }
        </ul>
        {/*Index showing dots*/}
        <p>dots</p>
    </div>
  )
}
