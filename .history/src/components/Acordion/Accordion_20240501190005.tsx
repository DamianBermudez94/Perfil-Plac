import { useState } from "react";
import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import "./style.css";



export const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        {question}
        <FaAngleDown />
      </button>
      <div className="accordion-content">
        {isOpen && <p>{answer}</p>}
      </div>
    </div>

  );
};