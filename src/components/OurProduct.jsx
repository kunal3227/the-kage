import React from 'react'

export const OurProduct = (props) => {
    const list2 = props.myList;

    const ProductCard = (props)=>{
        return(
            <div>
                <img src={props.img} alt={props.name} />
                <h2>{props.name}</h2>
                <p>{props.detail}</p>
            </div>
        )
    }

  return (
    <div>
        <h2>{props.title}</h2>
        <ul>
            {
                list2.map((i)=>{
                    return(
                    <ProductCard name={i[1]} img={i[2]} detail={i[3]} key={i[0]} />
                    );
                })
            }
        </ul>

    </div>
  )
}
