import styled from 'styled-components';

export const Container=styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  
  .about p{
    color: #aaa;
    margin-bottom: 2em;
   }  
  
  .about a{
    display: block;
    margin-top: 15px;
    padding: 10px 15px;
  }

  @media (max-width:500px){
    text-align:center;
    margin-top:250px;
 }

 @media(min-width:600px){
     margin-top:230px;
  }
 
  @media(max-width:1024px){
     margin-top:700px;
  }
`;

