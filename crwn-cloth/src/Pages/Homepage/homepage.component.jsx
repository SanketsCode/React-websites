import React from 'react';
import Directory from '../../components/directory/directory';
import './homepage.style.scss';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
    return ( 
        <HomePageContainer>
           <Directory/>
        </HomePageContainer>
     );
}
 
export default HomePage;