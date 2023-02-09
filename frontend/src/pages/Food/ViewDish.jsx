
import Niv from '../../components/Niv';
import { Button ,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './foodcss.css';
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Prev } from "react-bootstrap/esm/PageItem";

   
const ViewDish = () => {
    
    const navigate = useNavigate();
    const [dishes, setDishes] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [updatedDish, setupdatedDish] = useState({});

    useEffect(() =>{
        axios
        .get("http://localhost:8070/dishHandler/viewDish")
        .then((res) => {
            console.log(res);
            setDishes(res.data);
        })
        .catch((err) =>console.log(err))
    }, []);

    const deleteDish = (id) => {
        
      console.log(id);
      axios.delete(`http://localhost:8070/dishHandler/delete/${id}`)
        .then((res)=> console.log(res))
        .catch((err) => console.log(err));
       
        window.location.reload(); 
    };

    const updateDish = (dish) => {
       // console.log(post);
        setupdatedDish(dish);
        handleShow();

    };

    const handleChange = (e) => {
        const {name , value } = e.target;
        console.log(e);
        setupdatedDish((prev) => {
            return({
                ...prev,
                [name] : value,
            });
        });
    };

    const saveUpdatedDish = () => {
       // console.log(updatedPost);
        axios.put(`http://localhost:8070/dishHandler/update/${updatedDish._id}` , updatedDish)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        handleClose();
        window.location.reload();

    };

    // return (
    // <div>
    // <Niv name='Food'/>   
    // </div>
    // );


    return(

        <div className="dishDataDiv" style={{width:"100%" , margin:"auto auto" , textAlign :"center"}}>
            <Niv name="View Dishes" />
            {/* <h1>View all avaliable Dishes</h1> */}
            <Button className='middlebtns' onClick={ () => navigate(-1)}>
              Click here to add more Dishes
            </Button>
         
           
           
            <Modal show={show} onHide={handleClose} className="theModal" >
                <Modal.Header closeButton>
                 
                    <h3>Update the Dish</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>

                        <table className="modalTable">
                                <tr>
                                  
                                    <td className='modaltd'>
                                        <Form.Control 
                                            className="anInput"
                                            placeholder="Name" 
                                            style={{marginBottom:"1rem"}}
                                            name = "title"
                                            value = {updatedDish.title ? updatedDish.title : "" }
                                            onChange = {handleChange}
                                         />

                                    </td>
                                </tr>
                                <tr >
                            
                                    <td className='modaltd'>
                                        <Form.Control 
                                            className="anInput"
                                            placeholder="Description" 
                                            style={{marginBottom:"1rem"}}
                                            name = "description"
                                            value = {updatedDish.description ? updatedDish.description : "" }
                                            onChange = {handleChange}
                                         />

                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td className='modaltd'> 
                                        <Form.Control 
                                            className="anInput"
                                            placeholder="Price" 
                                            style={{marginBottom:"1rem"}}
                                            name = "price"
                                            value = {updatedDish.price ? updatedDish.price : "" }
                                            onChange = {handleChange}
                                       />

                                    </td>
                                </tr>
                            </table>

                    

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='middlebtns' onClick={handleClose}>
                         Close
                    </Button>
                    <Button className='middlebtns' onClick={saveUpdatedDish}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {dishes ? (
                <>
                    {dishes.map(dish => {
                        return(
                            <div key={dish._id} className="dishDataDiv" >

                                <table  className="headingtable">
                                    <tr>
                                        <td>Dish Name</td>
                                        <th><h3> {dish.dishTitle}</h3></th>
                                    
                                    </tr>

                                    <tr>

                                        <td>Description</td>
                                        <th><h3> {dish.dishDescription}</h3></th>
                       
                                    </tr>

                                    <tr>
                                        <td>Dish Price</td>
                                        <th><h3>{dish.dishPrice} </h3></th>
                                       
                                    </tr>

                                    <tr>
                                        <td>
                                    
                                                <Button 
                                                    className='middlebtns' 
                                                    onClick={() => updateDish(dish)} 
                                                    style={{marginRight:"20px"}} >
                                                        UPDATE
                                                </Button>
                                        </td>
                                        <td>
                                                <Button 
                                                    className='middlebtns' 
                                                   
                                                    onClick ={() => deleteDish(dish._id)} 
                                                    style={{marginRight:"20px"}}>
                                                        DELETE
                                                    </Button>
                                        </td> 

                                    </tr>
                                </table>

                              
                            </div>
                        )
                    })}
                </>
            ): "" }
            </div>
          
        );









};

export default ViewDish;