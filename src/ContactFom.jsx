import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_URL } from './api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {

        
      await axios.post(`${API_URL}/api/contact-form`, formData);
      setStatus('Success! Check your WhatsApp.');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Bhavya Daulatwal"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              value={formData.name}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
            <input 
              type="tel" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="919876543210"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              value={formData.phone}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea 
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Tell us something..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              value={formData.message}
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/20 transition"
          >
            Send Message
          </motion.button>
          
          {status && <p className="text-center mt-4 text-sm font-medium text-emerald-400">{status}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;