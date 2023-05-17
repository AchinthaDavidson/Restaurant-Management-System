import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Notification.css";

const Notification = () => {
  const [items, setItems] = useState([]);
  const [lowStockItems, setLowStockItems] = useState([]);
  const [deliveryOrders, setDeliveryOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/resInventory/').then((res) => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    const lowStockItems = items.filter((item) => item.Quantity <= 0);
    setLowStockItems(lowStockItems);
  }, [items]);

  useEffect(() => {
    axios.get('http://localhost:8070/order/').then((res) => {
      const orders = res.data.filter((order) => order.type === 'Delivery' && order.status === 'pending');
      setDeliveryOrders(orders);
    });
  }, []);


  return (
    <div className="Notification">
      <ul hidden id="notification">
        {deliveryOrders.map((order) => (
          <li key={order._id} className="notification-item delivery-pending">
           <span className="notification-message">
            <strong>Order {order.order_id}</strong> is pending for delivery
            </span>
          </li>
        ))}
        {lowStockItems.map((item) => (
          <li key={item._id} className="notification-item low-stock">
           <span className="notification-message">
            <strong>{item.Item_Name}</strong> is low in stock ({item.Quantity} {item.Unit} left)
            </span>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Notification;
