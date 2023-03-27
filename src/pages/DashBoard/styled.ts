import styled from 'styled-components';


export const Container=styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dashboard h2 {
      font-size: 2.2em;
      margin-bottom: 0.5em;
    }

    .dashboard p {
      color: #aaa;
      margin-bottom: 1em;
    }

    .noposts {
      text-align: center;
    }

    .noposts p {
      margin-bottom: 1.5em;
    }

    .noposts a {
      padding: 10px 25px;
    }

    .post_header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      border-bottom: 2px solid #ccc;
      width: 80%;
      padding: 10px;
    }

    .post_row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      width: 90%;
      padding: 10px;
    }

    .post_row p {
      color: #000;
    }

    .post_row button,
    .post_row a {
      margin: 0 5px;
      height: 30px;
      width: 100px;
      font-size: 0.7em;
    }
    
    @media(max-width:699px){
      
      .post_row button,
      .post_row a {
        margin: 10px 5px;
        height: 30px;
        width: 40%;
        margin-top:10px;
        font-size: 0.5em;
      }

      .post_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin-top:1.2em;
        width: 100%;
        padding: 4px;
      }
      
    }

    @media(min-width:700px){
      
      .post_row button,
      .post_row a {
        margin: 10px 2px;
        height: 30px;
        width: 90%;
        font-size: 0.6em;
      }
    } 

    @media(min-width:800px){
      
      .post_row button,
      .post_row a {
        margin: 0px 2px;
        height: 25.9px;
        width: 30%;
        font-size: 0.5em;
      }

      .post_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin-top:.2em;
        width: 90%;
        padding: 10px;
      }

    } 
  }

`