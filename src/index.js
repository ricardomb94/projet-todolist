import React from 'react';
import ReactDom from 'react-dom';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
