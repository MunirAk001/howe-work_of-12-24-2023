

import {get } from "./dom.js";

let SortTitle = document.querySelector(".SortTitle");

let api = "http://localhost:3000/data";
async function getdata() {
  try {
    const { data } = await axios.get(api);
    get(data);
  } catch (error) {
    console.log(error);
  }
}



// add  function
async function potusre(user) {
  try {
    let { data } = await axios.post(api, user);
    getdata();
  } catch (error) {
    console.log(error);
  }
}
// DELETE Function

async function DeleteUser(id) {
  try {
    let { data } = await axios.delete(`${api}/${id}`);
    getdata();
  } catch (error) {
    console.log(error);
  }
}

//  Edit Function
async function editUser(id, user) {
  try {
    const { data } = await axios.put(`${api}/${id}`, user);
    getdata(data);
  } catch (error) {
    console.log(Error);
  }
}

//  Sort function
 SortTitle.onclick = async () => {
   try {
     const { data } = await axios.get(`${api}?_sort=title`);
     get(data);
   } catch (error) {
     console.log(Error);
   }
 };
//  end of  Sort function



//  Sort async function FunctionUsersort() {

async function FunctionUsersort() {
  try {
    const { data } = await axios.get(`${api}?_sort=katagory`);
    get(data);
  } catch (error) {
    console.log(Error);
  }
}
//  end of  async function FunctionUsersort() {



async function complet(id, user) {
  try {
  const {data}= await axios.put(`${api}/${id}`,user)
  get(data)
} catch (error) {
  console.log(error);
}
   
 }



export {
  getdata,
  potusre,
  DeleteUser,
  editUser,
  complet,
  FunctionUsersort,
};

