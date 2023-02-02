import React, { useEffect, useState } from "react";
import axios from "axios";
import Niv from '../../components/Niv';
import "./menu.css"
import soup from './soup.jpeg'

const Menu = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    function getproduct() {
      axios.get("http://localhost:8090/menu/").then((res) => {
        // console.log(res.data);
        setProduct(res.data);
        // console.log(orders[1]);
      });
    }
    getproduct();
  }, []);

  function deleteRow(category_Id){
    const dlte =
    "http://localhost:8090/menu/delete/" + category_Id ;
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
        <Niv name='Menu'/>
        <h1 className='title'>Products</h1>
        <div class="tbl-header">
          <a href="Menu/addMenu">
          <button class="add_pdct">+ New Product</button>
          </a>

          <table className="menu-tbl" cellpadding="0" cellspacing="0" border="0">
            <thead>
                <tr>
                <th className='menu-th'>Category Id</th>
                <th className='menu-th'>Category Name</th>
                <th className='menu-th'>Image</th>
                <th className='menu-th'>Action</th>
                </tr>
            </thead>

            <tbody>
              {product.map((product,index) => (
              <tr>
              <td>{product.category_Id}</td>
              <td>{product.Name}</td>
              <td>{product.Image}</td>
              <td>
                <button className='edit'>Edit</button>
                <button className='del' onClick={(e)=> deleteRow(product.category_Id)}>Delete</button>
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

export default Menu;