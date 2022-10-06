import ValuesObject from "../Model/Values-Object";

const { default: axios } = require("axios");
const { default: Massagee } = require("../Model/Message-Statuas");

class Opration{
  token;
  constructor(token){
this.token=localStorage.getItem('token');
  }
createtask=async(value)=>{
  console.log(value);
try {
  let response=await axios.post(`https://react-dashboard-1caaf-default-rtdb.firebaseio.com/tasks.json?auth=${this.token}`,
  value,
  {
    headers:{
      "Content-Type": "application/json",
    },
  }
  );
  console.log(response);
  return new Massagee("sucsess create Task",true);
} catch (error) {
  console.log(error.message);
}
}

//Reada Tasks 
readetask=async(value)=>{
  console.log(value);
try {
  let response=await axios.get(`https://react-dashboard-1caaf-default-rtdb.firebaseio.com/tasks.json?auth=${this.token}`,
  value,
  {
    headers:{
      "Content-Type": "application/json",
    },
  }
  );
  let Newarray=[];
  for(let obj in response.data){
    console.log(obj);
    let item=response.data[obj];
    let Task=new ValuesObject(item.id, item.name, item.detail, item.start, item.endDateRef, item.status);
    Newarray.push(Task);
  }
  return Newarray;
} catch (error) {
  console.log(error.message);
  return [];
}
}
}
export default  Opration;