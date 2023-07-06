import { ContactStyles } from "./ContactStyles";

const Contact = () => {
    return (
        <ContactStyles>
            <h1>Contato</h1>
            <form target="_blank" action="https://formsubmit.co/Leandromoniz55@gmail.com" method="POST">
                <label htmlFor="name">Nome*</label>
                <input type="text" id='name' name="name" placeholder='Escreva seu nome' required />
                <label htmlFor="e-mail">E-mail*</label>
                <input type="email" id='e-mail' name="e-mail" placeholder='Escreva seu e-mail' required />
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" placeholder='Me diga, como posso te ajudar !!!' cols="30" rows="10" id='message' required></textarea>
                {/* <Button type="submit">Enviar</Button> */}
            </form>
        </ContactStyles>
    );
};

export default Contact;