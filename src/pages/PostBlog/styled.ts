import styled  from "styled-components";

export const Container=styled.div`
.post_container {
  text-align: center;

  h3 {
    margin-bottom: 0.2em;
  }

  .tags {
    display: flex;
    justify-content: center;
  
    .tags p {
      margin-right: 1em;
    }

    .tags span {
      font-weight: bold;
    }
  }
}
`