// import { Alert } from "bootstrap";
import React, { useState } from "react";

const Booking = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        age:'',
        email:'',

        // Add more fields as needed
      })

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Store form data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
    
        // Clear form data
        setFormData({
          name: '',
          address: '',
          age:'',
          email:'',
          // Reset other fields as needed
        });
        alert('Your booking is successfully done')
      };

  return (
    <div style={{ backgroundColor:'black'}}>
    <div className="container" style={{color:'white', width:'40%',height: '100vh', backgroundColor:'black', marginTop:'50px'}}>
        <h1 style={{marginBottom:'50px'}}>Book now and enjoy your favourite show</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Fill your name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            // aria-describedby="emailHelp"
          />
       
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Fill your address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            // aria-describedby="emailHelp"
          />
       
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="xyz"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Click for  booking
        </button>
      </form>
    </div>
    </div>
  );
};

export default Booking;
