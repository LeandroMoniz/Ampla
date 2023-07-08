import styled from "styled-components"

export const FooterStyles = styled.footer`
background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);

   .flex-container {
    border-radius: 0px 300px 0px 0px;
    border: 1px solid #000;
    background: #BFA442;
    height: 303px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
         border-radius: 0px 150px 0px 0px;
        }

    @media (max-width: 425px) {
         border-radius: 0px 120px 0px 0px;
         flex-direction: column;
        }
   }
   /* logo */
   .img{
      width: 30%;
      padding: 2% 5% 5% 5%;
      @media (max-width: 768px) {
            display: none;
        }

   }
   /* Informação */
   .fullInfo {
      align-self: center;
      width: 40%;
      @media (max-width: 425px) {
        align-self: baseline;
         margin-left: 10%;
         width: 70%;
        }
   }

   .info{
         color: #ffffff;
         padding: 0% 0% 5% ;
         font-size: 2.6rem;
   }
   .email{
         padding: 3% 0% 3% 6%;
        font-size: 1rem;
   }
   .phone{
      padding-left: 6%;
      font-size: 1rem;
   }
   /* Rede Social */
   .rede {
      align-self: center;
      width: 40%;
      @media (max-width: 425px) {
         align-self: baseline;
         width: 70%;
        }
   }
   .rede a{
      padding: 3%;
   }
   .social-media{
      margin-left: 10%;
   }
   .rede h1{
      color: #ffffff;
      padding: 0% 3% 1% 0%;
   }
   .rede h2{
      padding: 0% 0% 1% 8%;
   }
   .rede p{
      color: #ffffff;
      padding: 1% 0% 5% 10%;
      @media (max-width: 768px) {
            display: none;
        }
   }
   /* bass track */
   .bass {
    height: 50px;
    background: #172E4E;
   }
`