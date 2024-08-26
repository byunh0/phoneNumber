
const initialState = {
    contactList: [] // 초기값을 빈 배열로 설정
  };

  //중복여부 확인
  //isDuplicate 함수 contactList와 newContact를 인자로 받아 contactList에서
  //newContact와 같은 name과 phoneNumber이 있는지 검사한다.
  //Array.prototype.some()메서드로 중복된 항목이 있는지 확인한다.
 const isDuplicate = (list,newContact) =>{
    return list.some(contact=>
        contact.name===newContact.name && contact.phoneNumber === newContact.phoneNumber
    )//contact로 한개씩 비교
 }
function reducer(state=initialState,action){
   
    //object distructing문법
    const {type,payload}=action
    
    //type과 payload를 action으로부터 뽑아 내겠다!
    console.log("type",action.type)
    switch (type){
       
        case "add_contact": 
        if(isDuplicate(state.contactList,payload)){
            return state;
        }else if(payload.name==''||payload.phoneNumber==''){
            return {...state};
        }else{
            return {...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]};
        }
            default: return { ...state };
    }
}

export default reducer;