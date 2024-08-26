import React from 'react'
import Numberbox from './Numberbox'
import Searchbox from './Searchbox'
import'../App.css'
import{useSelector} from 'react-redux'
const Information = () => {
  const contactList =useSelector(state=>state.contactList)
  return (
    <div  className="namesearch-style">
    <Searchbox />
    {contactList.map((item)=> <Numberbox item={item}/>)}
   
    </div>
  )
}

export default Information