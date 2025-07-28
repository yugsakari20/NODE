// App.jsx
import React from 'react';
import CartPage from './Cartpage';
import './App.css'; 
import '@mui/material/styles'; // Ensure MUI styles are imported
import '@mui/material/Button';
import '@mui/material/IconButton';
import '@mui/material/TextField';
import '@mui/icons-material/Delete';




function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <CartPage />
    </div>
  );
}

export default App;
