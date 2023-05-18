import "./orderSummary.css";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderSummary() {

	const [orders,setOrders] = useState("")
	const [products, setProducts] = useState([])

	useEffect(() => {
		const order = JSON.parse(localStorage.getItem('AllOrderDetails'));
		if(order !=null  ){
			//console.log(order);
			setOrders(order)
		}

		
	
	}, []);


	useEffect(() => {
		axios
		  .get("http://localhost:8070/orderfood/viewAllOrder")
		  .then((res) => {
			//	console.log(res.data)
			setProducts(res.data)
		  })
		  .catch((err) => console.log(err));
		
	  }, []);

    return (
        <>
			<div className="main-header">
				<h1>PALLADIUM RESTAURANT & BAR</h1>
			</div>

			<div className="content">
				<div className="ordersummary-heading">
					<h2>Order Summary</h2>
				</div>
				<div className="order-summary">
					<div className="order-no">
						<h3>Order No: {orders.order_id }</h3>
						<button className="btn-invoice">Print Invoice</button>
						{/*<button className="btn-track">Track Order</button>*/}
					</div>
					<div className="item-details">
						<table>
							<thead>
								<tr>
									<th>Item Name</th>
									<th>Quantity</th>
								</tr>
							</thead>
							<tbody>
									
							{products
							.filter((val)=>{
								if(val.order_id == orders.order_id){
									return val
								}
							})
							.map((val,index)=>(
								<tr key={index}>
									<td>{val.food_id}</td>
									<td>{val.qty}</td>
								</tr>
							))}
							</tbody>
						</table>
						<div className="total">
							<h3>Grand Total: {orders.total}</h3>
						</div>
					</div>
				</div>
			</div>
		<Footer /></>
        );
}

export default OrderSummary;
