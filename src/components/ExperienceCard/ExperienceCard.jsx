import React from 'react';
import './ExperienceCard.css';
import logo from '../../assets/images/Logo.png'
const ExperienceCard = (props) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={logo} className="" height={150} width={150} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
