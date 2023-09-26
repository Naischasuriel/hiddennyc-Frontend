import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const ShowModal = ({ show, events, onSubmit, handleChange }) => {
  const [newForm, setNewForm] = useState({
    name: '',
    image: '',
    title: '',
  });

  const loaded = () => {
    return events.map((event) => (
      <div key={event._id} className="event">
        <Link to={`/event/${event._id}`}>
          <h1>{event.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  if (!show) {
    return null; // Return null or some fallback when show is false
  }

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Create a new event object with a unique ID generated by uuidv4
    const newEvent = {
      name: newForm.name,
      image: newForm.image,
      title: newForm.title,
      _id: uuidv4(), // Generate a unique ID
    };
  
    // Call the onSubmit function passed as a prop to handle form submission
    onSubmit(newEvent);
  
    // Reset the form fields
    setNewForm({
      name: '',
      image: '',
      title: '',
    });
  };

  return (
    <div className="ShowModal">
      <section className="events-section">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            defaultValue={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            defaultValue={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            defaultValue={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input type="submit" value="Create Event" />
        </form>
        {events ? loaded() : loading()}
      </section>
    </div>
  );
};

export default ShowModal;
