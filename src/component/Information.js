import React from 'react'
import Numberbox from './Numberbox'
import Searchbox from './Searchbox'
import'../App.css'
import{useSelector} from 'react-redux'
const Information = () => {
  
  const contactList =useSelector(state=>state.contactList);
  const searchList = useSelector(state => state.searchList);

  return (
    <div className="namesearch-style">
    <Searchbox />
    <div>
      <h5>검색결과:</h5>
      {searchList.length > 0 ? (
        searchList.map((item, index) => (
          <Numberbox key={index} item={item} />
        ))
      ) : (
        <p>찾지 못했습니다</p>
      )}
    </div>
    <div>
      <h5>전체결과:</h5>
      {contactList.map((item, index) => (
        <Numberbox key={index} item={item} />
      ))}
    </div>
  </div>
);
};

export default Information