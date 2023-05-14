import "./orderSummary.css";

function OrderSummary() {
    return (
        <body>
		<div className="main-header">
			<h1>PALLADIUM RESTAURANT & BAR</h1>
		</div>

		<div className="content">
			<div className="heading">
				<h2>Order Summary</h2>
			</div>
			<div className="order-summary">
				<div className="order-no">
					<h3>Order No: [#74832986428]</h3>
					<button className="btn-invoice">Print Invoice</button>
					<button className="btn-track">Track Order</button>
				</div>
				<div className="item-details">
					<table>
						<thead>
							<tr>
								<th>Item No</th>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Unit Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>R0001</td>
								<td>Chicken Fried Rice</td>
								<td>2</td>
								<td>Rs.900.00</td>
								<td>Rs.1800.00</td>
							</tr>
							<tr>
								<td>R0465</td>
								<td>Pizza Margerita</td>
								<td>1</td>
								<td>Rs.1300.00</td>
								<td>Rs.1300.00</td>
							</tr>
							<tr>
								<td>B1118</td>
								<td>Eristoff Vodka</td>
								<td>2</td>
								<td>Rs.4300.00</td>
								<td>Rs.8600.00</td>
							</tr>
						</tbody>
					</table>
					<div className="total">
						<h3>Grand Total: </h3>
					</div>
				</div>
			</div>
		</div>
	</body>
        );
}

export default OrderSummary;
