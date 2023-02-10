import React, { useEffect, useState} from 'react';
import Niv from '../../components/Niv';
import "./faq.css";
import { AiFillDelete,AiFillEdit,AiFillPlusCircle } from "react-icons/ai";
import {BsChatRightText} from 'react-icons/bs';
import axios from "axios";

const QandA = () => {

    const [faq, setFaq] = useState([]);
    useEffect(() => {
    function getFaq() {
      axios.get("http://localhost:8070/faq/").then((res) => {
        setFaq(res.data);
      }).catch((err) =>{
        alert(err);
      })
    }
    getFaq();
    }, []);

    const [category , setcategory] = useState("");
    const [question , setquestion] = useState("");
    const [answer , setanswer] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  const faq = {category,question, answer};
  axios.post("http://localhost:8070/faq/add/", faq).then(()=>{
      alert("New FAQ added!");
      window.location.reload(false);
      setcategory('')
      setquestion('')
      setanswer('')
    }).catch((err)=>{
      alert(err);
    })
  }
  
    function deleteFaq(_id){
      const del = "http://localhost:8070/faq/delete/" + _id ;
  
      axios.delete(del).then(() => {
          alert("FAQ Deleted");
          window.location.reload(false);
      }).catch(err => {
          alert("Could not Delete");
      });
    };






    return (
        <div>
            <Niv name='Frquently Asked Questions'/>
            <div className='data'>

            <button class="button-29" ><BsChatRightText/>&nbsp;&nbsp;Check Customer Messages</button>

            <form className="FormFAQ" onSubmit={handleSubmit}>
              <div class="formfiels">
                <div class="txta">
                  <label className="lbl">Category</label><br/>
                  <textarea rows="1" cols="110" style={{resize:'none'}} placeholder="Category" value={category} onChange={(e) => setcategory(e.target.value)}/>
                </div>

                <div class="txta">
                  <label className="lbl">Question</label><br/>
                  <textarea rows="2" cols="110" style={{resize:'none'}} placeholder="Question" value={question} onChange={(e) => setquestion(e.target.value)}/>
                </div>

                <div class="txta">
                  <label className="lbl">Answer</label><br/>
                  <textarea rows="2" cols="110" style={{resize:'none'}} placeholder="Answer" value={answer} onChange={(e) => setanswer(e.target.value)}/>
                </div>
            </div>
            <br/>
              <button class="button-30" type="submit" >
                <span><AiFillPlusCircle/>&nbsp;&nbsp;Add new FAQ</span>
              </button>
        </form>



            <div className="table123">
          <table className="tbl1">
            <thead className="th">
              <tr>
                <td className="tblh">Category</td>
                <td className="tblh">Question</td>
                <td className="tblh">Answer</td>
              </tr>
            </thead>
            <tbody>
            {faq.map((faq,index) =>(
              <tr key={index}>
              <td className="row">{faq.category}</td>
              <td className="row">{faq.question}</td>
              <td className="row">{faq.answer}</td>
              <td><button className="button-30"><AiFillEdit/>Edit</button></td>
              <td><button className="button-30"onClick={(e)=> deleteFaq(faq._id)}><AiFillDelete/>Delete</button></td>
            </tr>
            ))}
            </tbody>
          </table>
        </div>
            
           


            </div>
        
        </div>
    );
};

export default QandA;