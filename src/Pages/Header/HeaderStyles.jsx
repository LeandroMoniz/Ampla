import styled from "styled-components"

export const HeaderStyles = styled.header`
@media (max-width: 768px){
    background: #172E4E;
}
    .flex-container{
    background: #172E4E;
    border-radius: 0px 0px 20px 20px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100%;
}
.logo{
    width:20%;
    margin-left: 5%;
}

.link{
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;  
}
.link a {
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: #fff;
}

.link a:hover {
    color: #ccc;
}

.whats {
    width: 20%;
    display: flex;
    justify-content: center;
    align-self: center; 
}
>svg.mobile {
        display: none; }

@media (max-width: 768px) {
        .nav-bar {
            display: none;
            background: #172E4E;
            
        }
        >svg.mobile {
            color: #ffffff;
            display: block;
            cursor: pointer;
        }
    }



`