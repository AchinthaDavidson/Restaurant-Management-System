import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Notification.css";

const Notification = () => {
  const [items, setItems] = useState([]);
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/resInventory/').then((res) => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    const lowStockItems = items.filter((item) => item.Quantity < 0);
    setLowStockItems(lowStockItems);
  }, [items]);

  

  return (
    <div className="Notification">
  <ul hidden id="notification" >
    {lowStockItems.map((item) => (
      <li key={item.Item_Id}>
        <strong>{item.Item_Name}</strong> is low in stock ({item.Quantity} {item.Unit} left)
      </li>
    ))}
  </ul>
</div>
  );
};

export default Notification;
