import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: ""
    });

    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/save-contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setStatusMessage(`Error: ${data.error}`);
                } else {
                    setStatusMessage("¡Gracias por contactarnos!");
                    setFormData({ name: "", email: "", comment: "" });
                }
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
                setStatusMessage("Hubo un problema al enviar los datos.");
            });
    };

    return (
        <>
            <div className="container-contactme">
                <div className="card-contactme">
                    <span className="title-contactme">Contáctanos</span>
                    <form className="form-contactme" onSubmit={handleSubmit}>
                        <div className="group-contactme">
                            <input
                                placeholder=""
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="group-contactme">
                            <input
                                placeholder=""
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Correo</label>
                        </div>
                        <div className="group-contactme">
                            <textarea
                                placeholder=""
                                id="comment"
                                name="comment"
                                rows="5"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="comment">Comentario</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </div>
            </div>
        </>
    );
};

export default ContactMe;
