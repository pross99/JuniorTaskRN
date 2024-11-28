import React, { useState, useContext } from 'react';
import './Basket.css'
import { BasketContext } from '../../context/BasketContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Basket () {
    const {basketItems,removeFromBasket,placeOrder} = useContext(BasketContext)

    // Calculate total price of items
    const totalCost = basketItems.reduce((total, item) => total + item.Price, 0)
    console.log(basketItems)
  return (

    
    <div className='basket-card-container'>
        <div className='basket-card-header'> </div>
            <span> You have ({basketItems.length}) in your basket!</span>
    {basketItems && basketItems.length > 0 ? (
        <div className='basket-grid-container'>
            {basketItems.map(item => (
                <div className='basket-card'> 
                    <div className='basket-detail'>
                        <div className='basket-poster'>
                            <img src={item.ImageUrl} alt={item.Name} />
                        </div>
                        <div className='item-title'>
                            <div className='item-column'>
                                <h4 className='column-answer'>{item.Name}</h4>
                            </div>
                            <div className='item-column'>
                                <h4 className='column-answer'>{item.Brand}</h4>
                            </div>
                            <div className='item-column'>
                                <h4 className='column-answer'>
                                    ${item.Price}
                                </h4>
                            </div>
                            <FontAwesomeIcon icon={faTrash} onClick={() => removeFromBasket(item.ID)}
                                /> Remove
                               
                        </div>
                    </div>
                </div>
                
       ))}
       <div ></div>
       <div className='basket-checkout'> Total cost: ${totalCost}
        <button className='basket-checkout-button' onClick={() => placeOrder(basketItems)}>
            Place order
             </button>  
        </div>
  </div>
    ) : (
        <div>Basket empty</div> // baskeet empty
    )}
   
    </div>
  )
}

export default Basket