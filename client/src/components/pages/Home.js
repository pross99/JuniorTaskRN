import React, { useContext } from 'react'
import { ItemsContext} from '../../context/ItemContext';
import RowSlider from '../UI/RowSlider';
import Basket from '../UI/Basket';
import './Home.css'

const  Home = () => {

  // consume items from the context

  return (
   
    <main>
      <h2>Blackfriday deals</h2>
      <RowSlider /> 
      <Basket /> 
    </main>
    
  )
}


export default Home;
