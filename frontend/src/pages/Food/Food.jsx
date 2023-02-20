import { Button ,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './foodcss.css';
import React, { useState ,useEffect ,Component } from "react";
import axios  from "axios";
import Niv from "../../components/Niv";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateFoodJS(){

    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState('');
    const [ingCost,setIngCost] = useState('');
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [unit ,setUnit ] = useState("");
    const [quantity ,setQuantity ] = useState("");
    // const Ingridients = [['basmtthiiiiiiiiiii',5 ,'kg']  , ['cokking oil',2 ,'l'] ];
    const Ingridients = [
                            {name: 'basmtthiiiiiiiiiii', quantity : 5 ,unit :'kg'}  , 
                            {name: 'cokking oil',quantity : 2 ,unit :'l'} ];
    
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState([]);

    const removeIng = (name) =>{
        setIngredient((exsistingIngredients) => {
            return exsistingIngredients.filter((ings) => ings !== name);
        });
    };



    const [dish,setPost] = useState({       // this may  need to change
        dishTitle : "",
        dishDescription :"", 
        dishPrice: "" ,
        dishIngridients : ingredient

    });

    useEffect(() => {
      function getItems() {
        axios.get("http://localhost:8070/resInventory/").then((res) => {
       
          setItems(res.data);
          // console.log(orders[1]);
        });
      }
      getItems();
    }, []);


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
        // console.log(dish);

       if (message.trim().length !== 0){
        axios
        .post("http://localhost:8070/food/create" , dish)  // this need to change
        .then( (res) => {
            //console.log(res);
            toast.success("Dish added succesfully");
        })
        .catch( (err) => console.log(err));
        navigate("ViewDish"); 

       }else{
        alert("Please fill the details") ;
        toast.error("Please fill all the details");
       
       };   
    };
 
    return (
      
        <div /*style={{width:"90%" , margin:"auto auto" , textAlign :"center"}}*/
            className="dishDataDiv">     
            <Niv name="Add a Dish" />

        <div className="data" >

        <div className="backgroundBorder"> 

            <Form className="boldfont" style={{width:"100%" }}>
                <Form.Group>
                <div className="btns"> 

                {/* <span className="anInput" id="priceTag"  style={{ width:"50%"} } >
                    Total cost for the ingrdients will show here...
                </span> */}
                     <Form.Control 
                        className="anInput"
                        name="dishTitle" 
                        placeholder="Enter the Dish Name here ..." 
                        value={dish.dishTitle}
                        style={{ width:"45%" , marginRight:"5%"} }
                        onChange={handleCange}
                    /> 

                    <Form.Control 
                        className="anInput"
                        name="dishPrice" 
                        placeholder="Enter the Price of the dish here..." 
                        style={{ width:"30%"} }
                        value = {dish.dishPrice}              
                        onChange={handleCange}
                    />

                </div>

                <Form.Control 
                        className="anInput"
                        name="dishDescription" 
                        placeholder="Enter a little description about the dish here..." 
                        style={{marginBottom:"1rem" , marginTop:"1rem" , }} 
                        value = {dish.dishDescription}
                        onChange={handleCange}
                    />

                </Form.Group>
            </Form>



            <table style={{width:"80%" , marginTop:"1rem" , marginLeft:"auto" ,marginRight:"auto" }}>
            
                        <tr >
                            <td colspan={6}>Select the ingredients for dish </td>                       
                        </tr>
                        <tr>
                            <td>Ingredient Name</td>
                            <td>Quantity Left</td>
                            <td>Cost for Ingredient</td>
                            <td>Set Unit</td>
                            <td>Set Quantity</td>

                            <td style={{width:"15%"}}>

                                <Form.Control 
                                    className="anInput"
                                    style={{width:"100%", marginLeft:"auto" ,marginRight:"auto" }}
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value);
                                        setName(event.target.value);
                                    }}
                                
                                    placeholder=" Search Here" 
                                    value={name}
                                />     
                            </td>
                        </tr>
              

                {items.filter((val) =>{
                    if (searchTerm === "") {
                     return (val);
                      } else if (
                        val.Item_Name.toLowerCase().includes(searchTerm.toLowerCase())
                      ) {
                          return val;
                      }                  
                })
                .slice(0, 1)
                .map((items, index) => (
                        <tr key={index}>               
                            <td >{items.Item_Name}</td>
                            <td>{items.Quantity}{items.Unit}</td>
                            <td>{items.Total_Cost}</td> 

                            <td style={{width:"10%"}}>
                                <select 
                                    name="unit" id="format"  
                                    style={{height:"3.5rem" ,
                                    marginLeft:"auto" ,
                                    marginRight:"auto" }} 
                                    value={unit} 
                                    onChange={(e) => setUnit(e.target.value)}
                                >
                                    <option selected >Select Unit</option>
                                    <option >g</option>
                                    <option>ml</option>
                                </select>  
                            </td> 

                            <td  style={{width:"20%"}}>
                          
                                <Form.Control 
                                    className="anInput"
                                    style={{width:"100%",marginLeft:"auto" ,marginRight:"auto" }}
                                    onChange={(event) => {
                                        setQuantity(event.target.value);
                                    }}
                                    placeholder="Quantity" 
                                />     
                            </td>


                            <td  style={{width:"20%"} }>

                                <button className="middlebtns2"
                                style={{width:"60%"}}
                                onClick={()=>{
                                    if(!name == "" && unit !="" && quantity != ""){
                                        setName('');
                                        ingredient.push({
                                            name: items.Item_Name,
                                            quantity : quantity,
                                            unit : unit 
                                          
                                        });
                                        var pQuan = Number(quantity);
                                        var pTCost = Number(items.Total_Cost);
                                        var pQuanAl = Number(items.Quantity)
                                        var totCost = (pTCost / pQuanAl) * pQuan;
                                        setIngCost(totCost);
                                    }
                                   
                                }} >   
                                    Add 
                                </button>
                            
                            </td>                   
                       </tr>
                        ))}           
        </table> 

        
        <div className="btns" style={{width:"73%" , marginTop:"2rem" , marginLeft:"auto" ,marginRight:"auto"}}>

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

        <table  style={{width:"80%" , marginTop:"1rem" , marginLeft:"auto" ,marginRight:"auto" , marginBottom:"5rem"}}>
                                        <tr>
                                            <td colspan={2}> Added Ingredients will show here</td>
                                            <td colspan={2}> 
                                                <span value={ingCost}>Total Cost for the Dish Ingredients :{ingCost}</span>                                 
                                            </td>
                                        </tr>
                                        <tr> 
                                           <td>Name</td>
                                            <td>Quantity</td>
                                            <td>Unit</td>  
                                            <td>Remove</td>                                          
                                        </tr> 
                                            {ingredient.map((ings,index)=> {
                                           return(                                         
                                                <tr key={index}>
                                                    <td  > {ings.name} </td>
                                                    <td  > {ings.quantity} </td>
                                                    <td  > {ings.unit} </td>   

                                                    <td> 

                                                        <button className="middlebtns2" onClick={()=>removeIng(ings)}>   
                                                           Remove
                                                        </button>  
                                                        
                                                    </td>          
                                                </tr>                                 
                                           )
                                         })} 
                                           
        </table>
        </div>
        </div>
        </div>
     
    );
}

export default CreateFoodJS; 