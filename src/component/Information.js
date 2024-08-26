import React from 'react'
import Numberbox from './Numberbox'
import Searchbox from './Searchbox'
import'../App.css'
import{useSelector} from 'react-redux'
import  { useState, useEffect } from 'react';
const Information = () => {
  const [showAllResults, setShowAllResults] = useState(true);
  const contactList =useSelector(state=>state.contactList);
  const searchList = useSelector(state => state.searchList);


  const handleSearch = (resultsExist) => {
    setShowAllResults(!resultsExist); 
  };

  useEffect(() => {
    setShowAllResults(searchList.length === 0);
  }, [searchList]);
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
    {showAllResults && (
        <div>
          <h5>전체결과:</h5>
          {contactList.map((item, index) => (
            <Numberbox key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Information