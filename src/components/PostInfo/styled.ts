import styled from 'styled-components';

export const Container=styled.div`
  margin-top:3em;
  height:150px;
  margin-bottom: .5em;
  border:1px solid black;
  padding-left:15px;

  .post_detail h2 {
    margin-bottom: 0.5em;
  }

  .post_detail .tags {
    margin-bottom: 1.2em;
    display: flex;
  }

  .tags p {
    margin-right: 0.5em;
  }

  .tags span {
    font-weight: bold;
  }

  @media(max-width:600px){
    margin-top:2em;
    height:230px;
    border:1px solid black;
    padding-left:5px;
  }

  .tags p {
    margin-right: .7em;
  }

  .post_detail .tags {
    display: flex;
  }

`