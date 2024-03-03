import sgMail from '@sendgrid/mail';

// eslint-disable-next-line no-undef
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

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