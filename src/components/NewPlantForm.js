import React, { useState } from "react";

function NewPlantForm({ plantArr, setPlantArr }) {
  const [form, setForm] = useState({ name: "", image: "", price: 0 });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setPlantArr([data, ...plantArr]));
    setForm({ name: "", image: "", price: 0 });
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
          value={form.name}
        />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={form.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
