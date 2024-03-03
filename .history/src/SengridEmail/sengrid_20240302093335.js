import sgMail from '@sendgrid/mail';

sgMail.setApiKey('TU_API_KEY');

const enviarCorreo = async (destinatario, remitente, asunto, contenido) => {
  const msg = {
    to: destinatario,
    from: remitente,
    subject: asunto,
    text: contenido,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

export default enviarCorreo;