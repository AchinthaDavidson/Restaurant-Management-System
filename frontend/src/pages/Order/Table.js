import React from "react"

export default function Table({ list, total,invoiceNumber ,invoiceDate}) {
  
  return (
    
    <>
      <center>Palladium<br/>123,bla bla bla,<br/>Nuwaraeliya <br/> {invoiceNumber}<br/>{invoiceDate}
      <br/>---------------------------------------------</center>
      <table width="100%" className="mb-10" color="white">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Name</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount}) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
         LKR: {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
