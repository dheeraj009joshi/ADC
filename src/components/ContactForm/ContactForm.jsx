import { useState, useEffect } from 'react';
import React from 'react';
import './ContactForm.css';
import forming from '../../assets/images/formImg.png'
const FormSection = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellido: '',
        telephone: '',
        email: '',
        postal:"",
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                Nombre: '', //name
                Apellido: '',//
                telephone: '',//phone
                email: '',//email
                postal:"",//postal
                message: ''//comment
            });
        }, 5000);
    };

    return (
        <div className="form-section ">
            <div className="form-image col-md-3">
                <img src={forming} alt="Placeholder" />
            </div>
            <div className="form-container">
                {isSubmitted ? (
                    <div className="success-message">Thank you for contacting us! We will get back to you soon.</div>
                ) : (
                    <>
                        <h2 className="form-header">Obtén tu consulta gratis en segundoss</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Nombre"
                                    placeholder="Nombre"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="Apellido"
                                    placeholder="Apellido"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="telephone"
                                    placeholder="Numero de Teléfono"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Codigo Postal"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">Compra su auto</button>
                        </form>
                       <p>Al dar clic OBTÉN AYUDA DE COMPRA, aceptas y consientes recibir llamadas y mensajes de texto de telemarketing de nosotros, nuestras 
entidades y nuestros socios comerciales, incluidas llamadas y mensajes de texto realizados mediante tecnología automatizada que 
puede incluir una voz artificial o pregrabada y/o un sistema de marcación automática, a los números de teléfono proporcionados. 
Comprendes que tu consentimiento no es necesario como condición para comprar ningún bien o servicio de nosotros, nuestras 
entidades o socios comerciales. Aceptas los términos de la <a href="/">Política de privacidad</a> y los <a href="/">Términos de uso</a> de este sitio.</p>
                        
                    </>
                )}
            </div>
        </div>
    );
};

export default FormSection;
