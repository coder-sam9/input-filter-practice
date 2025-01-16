  import { useState } from "react";
  import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import DropDown from "./components/UI/DropDown";


  function App() {
    const initialState={
      userName:'',
      userEmail:'',
      userPhone:'',
      busNumber:'Bus 1',
    };
    const [userDetails,setUserDetails]=useState(initialState);
    const [bookings,setBookings]=useState([]);
    const [filterBy,setFilterBy]=useState('')
    const filteredBookings =
    filterBy === "All" || !filterBy
      ? bookings
      : bookings.filter((item) => item.busNumber === filterBy);
    function handleFormSubmit(event) {
      
      event.preventDefault();
      if (
        !userDetails.userName ||
        !userDetails.userEmail ||
        !userDetails.userPhone
      ) {
        alert("Please fill all fields!");
        return;
      }
  
      const newBooking = {
        ...userDetails,
        id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      };
  
      setBookings((prevState) => [...prevState, newBooking]);
      console.log(userDetails);
      

      setUserDetails(initialState);
      
    }
    function handleItemDelete(id) {
      setBookings((prevState) => prevState.filter((item) => item.id !== id));
    }
  
    function handleItemEdit(id) {
      const bookingToEdit = bookings.find((item) => item.id === id);
      setUserDetails(bookingToEdit); // Populate form with booking data
      setBookings((prevState) => prevState.filter((item) => item.id !== id)); // Remove from list temporarily
    }
    return (
      <div className="App">
        <h1>Bus Booking</h1>
        <DropDown  title="Filter" options={['All','Bus 1','Bus 2','Bus 3']} required={true} for={'busNumber'} onChange={(value)=>{setFilterBy(value)}}/>
        <form onSubmit={handleFormSubmit}>

        <Input id='name' value={userDetails.userName} type='text' title={'Name'} required={true} onChange={(value)=>setUserDetails(prevState=>{return {...prevState,userName:value}})}/>
        <Input id='email' value={userDetails.userEmail} type='email' title={'Email'} required={true} onChange={(value)=>setUserDetails(prevState=>{return {...prevState,userEmail:value}})}/>
        <Input id='phone' value={userDetails.userPhone} type='tel' title={'Phone'} required={true} onChange={(value)=>setUserDetails(prevState=>{return {...prevState,userPhone:value}})}/>
       <DropDown title="Car Number" options={['Bus 1','Bus 2','Bus 3']}value={userDetails.busNumber || "Bus 1"} required={true} for={'busNumber'} onChange={(value)=>{setUserDetails(prevState=>{return {
          ...prevState,busNumber:value
        }})}}/>
        <Button title='Book' type={'submit'}/>
        </form>
        <ul>
        {filteredBookings.map((item) => (
          <li key={item.id}>
            {item.userName} {item.userEmail} {item.userPhone} {item.busNumber}{" "}
            <Button
              onClick={() => handleItemEdit(item.id)}
              title="Edit"
            />{" "}
            <Button
              onClick={() => handleItemDelete(item.id)}
              title="Delete"
            />
          </li>
        ))}
        </ul>
      </div>
    );
  }

  export default App;
