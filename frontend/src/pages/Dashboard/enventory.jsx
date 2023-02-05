import React from "react";
import Card from "react-bootstrap/Card";
import { MdInventory} from "react-icons/md"

const customer = () => {
    return (
        <div style={{display:"flex"}}>
        <div style={{flexGrow: '6',minWidth:'25%',maxWidth:'40%'}}><MdInventory style={{fontSize:'65px',marginTop:'15px',marginLeft:'13px'}}/></div>
        <div style={{flexGrow: '1'}}>
        <Card.Title><label style={{fontSize:'20px'}}>Inventory stock</label></Card.Title>
        <Card.Text>
        <label style={{fontSize:'14px'}}>
            Restaurant   : Rs.5000/= <br/>
            Bar         : Rs.50000/=<br/>
            <div style={{color:'#7A2FF8'}}> Total stock : Rs.55000/=</div>
        </label>
        </Card.Text>
        </div>
    </div>
  )
};
export default customer;