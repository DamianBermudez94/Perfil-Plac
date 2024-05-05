import { FaWhatsapp } from 'react-icons/fa';
import "./styles.css"

const WhatsappButton = () => {
    const phoneNumber = '+542227485990'; // Reemplaza con tu número de teléfono
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <div className="container-button__whatsapp">
            <a className='whatsapp-button' href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={35} color="#ffffff" width={100%} />
            </a>
        </div>
    );
};
+54
export default WhatsappButton;