import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirim email atau menampilkan pesan sukses
    console.log(formData);
    alert('Pesan telah dikirim!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Nama:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block mb-1">Pesan:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Kirim</button>
      </form>
    </div>
  );
};

export default Contact;
