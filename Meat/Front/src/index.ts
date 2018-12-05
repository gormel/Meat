import { Program } from './program';
import { createElement } from 'react';
import { render } from 'react-dom';

const root = document.createElement('div');
document.body.appendChild(root);

render(createElement(Program), root);