//styled-components
import {Container} from './styled';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container className='about'>
          <h2>
            Sobre o Mini <span>Blog</span>
          </h2>
          <p>
            Este projeto consiste em um blog feito com React no front-end e Firebase
            no back-end.
          </p>
          <Link to="/posts/create" className="btn">
            Criar post
          </Link>
        </Container>
      );
};

export default About;