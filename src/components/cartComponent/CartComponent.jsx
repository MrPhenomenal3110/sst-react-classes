import React from 'react'
import { useSelector } from 'react-redux'

function CartComponent() {
    const items = useSelector((state) => {
        return state.cart?.items;
    });
   
    
  return (
    <div className='cart'>
        {Object.values(items).map((item) => {
            return (
                <div key={item.id}>
                    <div>
                        <h2>
                            {item.title}
                        </h2>
                    <span>Quantity : {item.quantity}</span>
                    </div>
                    <span>Price : {item.price}</span>
                </div>
            );
        })}
    </div>
  )
}

export default CartComponent