import React from 'react';
import cardsData from '../../data/cards.js';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import './ExperienceSection.css'
const ExperienceSection = () => {
  // console.log(cardsData)
    //ExperienceSection

      return (
        <section id="experience">
          <div className="container">
            <div className='experienceInfo'>
              <h1>Nuestra extensa red puede ayudarle con lo siguiente</h1>
              <div className='row experienceCards'>
                {cardsData.map((card, index) => (
                  <div key={index} className="col-md-3 ">
                    <ExperienceCard 
                      title={card.title}
                      image={card.image}
                      description={card.description}
                    />
                  </div>
                ))}
              </div>
              <a href="/" className="contact btn btn-primary btn-lg">Asistencia de compra 24/7</a>
            </div>
          </div>
        </section>
      );
    }
    
   

export default ExperienceSection
//ExperienceSection