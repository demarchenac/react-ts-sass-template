import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import logo from '../assets/logo.svg';
import './app.scss';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const App: React.FC = () => {
    return (
        <Col xs={12}>
            <Row center="xs">
                <Col xs={6} className="App-header">
                    <Row center="xs">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Row>
                    <p>
                        <FontAwesomeIcon icon={['fas', 'terminal']} /> &nbsp; This <strong>C.R.A.</strong> template
                        includes:
                    </p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'code']} /> &nbsp;
                            <a href="https://create-react-app.dev/docs/adding-typescript/">Typescript</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'code']} /> &nbsp;
                            <a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/">Scss</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'code']} /> &nbsp;
                            <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">Fontawesome</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'code']} /> &nbsp;
                            <a href="https://loicmahieu.github.io/react-styled-flexboxgrid/demo/index.html">
                                Flexbox-grid
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'code']} /> &nbsp;
                            <a href="https://www.sitepoint.com/react-with-typescript-best-practices/">
                                Eslint & Prettier config
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Col>
    );
};
