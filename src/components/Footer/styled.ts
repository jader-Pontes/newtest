import styled from 'styled-components';

export const Footer_div=styled.div` 
  
    height: 250px;
    margin-top: 310px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #edf3f6;

    @media (max-width:500px){
       text-align:center;
       margin-top:250px;
    }

    @media(min-width:600px){
        margin-top:370px;
     }
    
     @media(min-width:700px){
        margin-top:700px;
     }
`
