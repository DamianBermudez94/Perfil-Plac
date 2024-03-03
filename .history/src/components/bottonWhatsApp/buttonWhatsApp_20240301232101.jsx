import { FaWhatsapp } from 'react-icons/fa';
import "./styles.css"

const WhatsappButton = () => {
    const phoneNumber = '02227508824'; // Reemplaza con tu número de teléfono
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <div className="whatsapp-button">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} color="#25d366" />
            </a>
        </div>
    );
};

export default WhatsappButton;