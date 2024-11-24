import React, {useContext, useEffect, useState} from 'react'
import {ItemsContext} from "../../context/ItemContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Paper } from '@mui/material';
import './RowSlider.css'
import { BasketContext } from '../../context/BasketContext';



function RowSlider() {
    const {items, error} = useContext(ItemsContext)
    const {addToBasket} = useContext(BasketContext)


    if (error) return <div> Error: {error}</div>
    if (ItemsContext.length ===0) return <div> Loading...</div>

    return (
        <div className='item-grouped-container'>
            {items && items.length > 0 ? (
                <div className='items-grid-container'>
                    {items.map(item => ( 
                        <Paper 
                            key={item.ID}
                            elevation={3}
                        >
                            <div className='item-card-container'>
                                <div className='item-card'>
                                    <div className='item-detail'>
                                        <div className='item-poster'>
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
                                            <div className='item-basket'>
                                            <FontAwesomeIcon icon={faCartShopping} onClick={() => addToBasket(item)} /> Add to basket
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))}
                </div>
            ) : (
                <div>No items found</div>  // Added else condition for empty state
            )}
        </div>
    );
}

export default RowSlider;


