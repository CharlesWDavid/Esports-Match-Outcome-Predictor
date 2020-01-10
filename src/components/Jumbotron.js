import React from 'react';
import { Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import csgoLogo from '../assets/csgoLogo.jpg';

const Styles = styled.div`
    .jumbotron {
        background: url(${csgoLogo}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 450px;
        position: relative;
        z-index: -2;
    }

    .overlay{
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
        </Jumbo>
    </Styles>
)