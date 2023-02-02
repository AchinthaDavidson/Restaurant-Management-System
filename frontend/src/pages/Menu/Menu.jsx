import React from 'react';
import Niv from '../../components/Niv';
// import "./menu.css"
import soup from './soup.jpeg'

const Menu = () => {
    return (
        <div>
        <Niv name='Menu'/>
        <h1 className='title'>Products</h1>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
            <thead>
                <tr>
                <th>Code</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            </table>
        </div>

  <div class="tbl-content">
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
  </div>
  </div>
    );
};

export default Menu;