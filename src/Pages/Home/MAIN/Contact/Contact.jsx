import SectionTitle from "../../../../assets/Components/SectionTitle/SectionTitle";
import { ContactStyles } from "./ContactStyles";
import Button from '../../../../assets/Components/Button/Button'

const Contact = () => {
    return (
        <ContactStyles>
            <SectionTitle subTitle={"Contato"} />
            <div className='form-box'>
                <form target="_blank" action="https://formsubmit.co/Leandromoniz55@gmail.com" method="POST">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id='name' name="name" placeholder='Escreva seu nome' required />
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="email" id='e-mail' name="e-mail" placeholder='Escreva seu e-mail' required />
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" placeholder='Me diga, como posso te ajudar ? ' cols="30" rows="10" id='message' required></textarea>
                    <Button type="submit">Enviar</Button>
                </form>
            </div>
        </ContactStyles>
    );
};

export default Contact;