import React, { useEffect, useState } from 'react'
import { listUser } from '../userService/userService';

const Admin = () => {

  const [customer,setCustomer]=useState([]);
  
  useEffect(()=>{
    listUser().then((res)=>{
      setCustomer(res.data)

    }).catch(error=>{
      console.error(error)
    })

  },[]);
  return (
    <div className='container table-responsive'>
      <h2 className='text-center'>Customer List </h2>
      <table className='table table-striped  table-dark table-hover my-5'>
        <thead >
          <tr className='text-center'>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No.</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Total Days</th>
            <th>Fare</th>
            <th>Payment Method</th>
          </tr>
          
        </thead>
        <tbody>
          {
            customer.map(cus =>(
              <tr key={cus.id} className='text-center'>
                <td>{cus.id}</td>
                <td>{cus.firstname}</td>
                <td>{cus.lastname}</td>
                <td>{cus.phonenumber}</td>
                <td>{cus.startdate}</td>
                <td>{cus.enddate}</td>
                <td>{cus.days}</td>
                <td>{cus.fare}</td>
                <td>{cus.type}</td>

              </tr>
            ))
          }
        </tbody>
      </table>

      
    </div>
  )
}

export default Admin
