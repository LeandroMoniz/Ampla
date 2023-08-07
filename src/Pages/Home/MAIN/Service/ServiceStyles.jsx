import styled from "styled-components"

export const ServiceStyles = styled.main`
height: auto;
background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);
margin-bottom: 1%;

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Cria 3 colunas de tamanhos iguais */
  gap: 3%; /* Espaçamento entre as divisões */
  padding: 3%;
}

.box {
  background-color: #f0f0f0;
  padding: 6%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img{
    width: 100%;
    height: 50%;
    flex-shrink: 0;
}

h2 {
  margin: 3%;
  color: #333;
  text-align: center;
}

p {
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 2%;
  text-align: center;
}

button {
  margin-top: 9%;
  padding: 8px 12px;
}

.box a {
    text-decoration: none;
}

@media (max-width: 425px) {
  .container {
  grid-template-columns: repeat(1, 1fr);
}
}



`