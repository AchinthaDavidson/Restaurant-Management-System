import React, { useEffect, useState } from "react";
import axios from "axios";
import Niv from '../../components/Niv';
import "./driver.css"
import { useNavigate , Link} from 'react-router-dom';
//import soup from './soup.jpeg'

const Driver = () => {
  const [driver, setdriver] = useState([]);
  useEffect(() => {
    function getdriver() {
      axios.get("http://localhost:8070/driver/").then((res) => {
        // console.log(res.data);
        setdriver(res.data);
        // console.log(orders[1]);
      });
    }
    getdriver();
  }, []);

  function deleteRow(D_Id){
    const dlte =
    "http://localhost:8070/driver/delete/" + D_Id ;
    // alert(dlte);

    axios
      .delete(dlte)
      .then(() => {
        alert("deleted successfully");
      })
      .catch(err => {
        alert("error deleting");
    });
  };

    return (
        <div>
        <Niv name='Driver'/>
        <h1 className='title'>Driver Details</h1>
        <div class="tbl-header">
          <a href="Driver/AddDriver">
          <button class="add_drvr">+ New Driver</button>
          </a>

          <table className="menu-tbl" cellpadding="0" cellspacing="0" border="0">
            <thead>
                <tr>
                <th className='menu-th'>Driver Id</th>
                <th className='menu-th'>Driver Name</th>
                <th className='menu-th'>Email</th>
                <th className='menu-th'>Address</th>
                <th className='menu-th'>Phone Number</th>
                <th className='menu-th'>Password</th>
                <th className='menu-th'>Action</th>
                </tr>
            </thead>

            <tbody>
              {driver.map((driver) => (
              <tr>
              <td>{driver.D_Id}</td>
              <td>{driver.name}</td>
              <td>{driver.Email}</td>
              <td>{driver.address}</td>
              <td>{driver.phone_no}</td>
              <td>{driver.password}</td>
              <td>
                <Link to={`/Driver/UpdateDriver/${driver._id} `}>
                <button className='edit'>Edit</button>
                </Link>
                <a href = "/driver">
                  <button className='del' onClick={(e)=> deleteRow(driver._id)}>Delete</button>
                </a>
                
              </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

  {/*<div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>P001</td>
          <td>
            <img src='src\pages\Menu\soup.jpeg'/>
          </td>
          <td>Soup</td>
          <td>Rs.850</td>
          <td>
            <button className='edit'>Edit</button>
            <button className='del'>Delete</button>
          </td>
        </tr>

      </tbody>
    </table>
    </div>*/}
  </div>
    );
};

export default Driver;