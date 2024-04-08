import React from 'react'
import mapRoute from '../images/icons/road-route-map-icon.svg'

export const OrderWith = () => {
  return (
    <div>
        <button>Custome CAKE order withwhatsapp</button>
        <div>
            <button><img src={mapRoute} alt="" />Location</button>
            <button>Zomato</button>
        </div>
    </div>
  )
}
