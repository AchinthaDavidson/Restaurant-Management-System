import { Button ,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './foodcss.css';
import React, { useState } from "react";
import axios  from "axios";
import Niv from "../../components/Niv";
//import { Prev } from "react-bootstrap/esm/PageItem";


function CreateFoodJS(){

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [dish,setPost] = useState({       // this may  need to change
       dishTitle : "",
       dishDescription :"", 
       dishPrice: " "
      
    });

    const handleCange = (event) =>{

        const {name, value } = event.target;
        setMessage(name,value);

        setPost((Prev) => {
            return {
                ...Prev,
                [name] : value,

            };
        });
    };

    const handleClick = (event) => {

        event.preventDefault();
        console.log(dish);

       if (message.trim().length !== 0){
        axios
        .post("http://localhost:8070/food/create" , dish)  // this need to change
        .then( (res) => console.log(res))
        .catch( (err) => console.log(err));
        navigate("ViewDish"); 

       }else{
        alert("Please fill the details") ;
       };   
    };


    

    return (
       
        <div /*style={{width:"90%" , margin:"auto auto" , textAlign :"center"}}*/
        className="dishDataDiv">     

            <Niv name="Add a Dish" />
        
            {/* <h1> Add a Dish </h1> */}
            
            <Form className="boldfont">
                <Form.Group>

                    <Form.Control 
                        className="anInput"
                        name="dishTitle" 
                        placeholder="Dish Name" 
                        value={dish.dishTitle}
                        style={{marginBototm:"1rem"}}
                        onChange={handleCange}

                        /> 

                    <Form.Control 
                        className="anInput"
                        name="dishDescription" 
                        placeholder="Description" 
                        style={{marginBottom:"1rem" , marginTop:"1rem"}} 
                        value = {dish.dishDescription}
                        onChange={handleCange}
                    />

                <Form.Control 
                        className="anInput"
                        name="dishPrice" 
                        placeholder="Price" 
                        style={{marginBottom:"1rem" , marginTop:"1rem"}} 
                        value = {dish.dishPrice}
                        onChange={handleCange}
                    />

                </Form.Group>

            </Form>

{/*             
            <Button 
                className="button button2"
                variant="outline-info"
                style={{width:"35%" , marginBottom:"1rem" , marginTop:"1rem"}} 
                onClick={(handleClick)}
                > Add Dish
            </Button> */}

    
            {/* <Button 
                className="button button2"
                variant="outline-info"
                style={{width:"35%" , marginBottom:"1rem" , marginTop:"1rem"}} 
                onClick={ () => navigate(-1) }
                > Go Back
            </Button> */}


        <div className="btns">

            <button className="add_new"
             onClick={ () => navigate(-1)}
            >Go Back
            </button>
            
            <button className="add_new"
           
             onClick={(handleClick)}
            >+ Add Dish
            </button>

            <button className="add_new"
         
             onClick={ () => navigate("ViewDish")}
            >View Dishes
            </button>




            </div>
           
           {/*   style={{width:"20%" , marginBottom:"1rem" , marginTop:"1rem" , marginRight:"16%"}}  */}

        </div>
      
    );
}

export default CreateFoodJS; 