import styled from 'styled-components';

export const Nav=styled.nav` 
  
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 2em;
  
    .brand {
      font-size: 1.2em;
    }
      
    .brand span {
      font-weight: 900;
      text-transform: uppercase;
    }

    .links_list {
      display: flex;
      list-style: none;
    }
    
    .links_list li {
      margin-right: 1em;
    }  

    .links_list li a {
      padding: 0.4em 0.6em;
    }
    
    .active {
      background-color: #000;
      color: #fff;
    }
`