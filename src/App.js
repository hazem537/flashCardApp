import { useState } from "react";
import './style.css'
const flashcards = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    id: 2,
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    id: 3,
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein"
  },
  {
    id: 4,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    id: 5,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language"
  }
];
export default function App() {
  const [selcted_id ,setSelcted_id] = useState(null)
  const changeCard=(id)=>{
    if (id ==selcted_id ) {
      setSelcted_id(null) 
    return
   }

    setSelcted_id(id)
  }
  return (
    <div className="menu">
      {flashcards.map(item => 
      <FlasCard 
      Flascard={item} 
      selcted_id={selcted_id} 
      key={item.id}
      onClick={()=>changeCard(item.id)} />)}
    </div>
  );
}
const FlasCard = ({ Flascard ,selcted_id,onClick}) => {
  let  showAns  = selcted_id === Flascard.id
  return <div 
  onClick={onClick}
  className="card"
  style={{ backgroundColor: showAns ? "red" : "white" }} 
  >
    {showAns ? <p> {Flascard.answer} </p> : <p> {Flascard.question}</p>}


  </div>
}
