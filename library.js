import React from 'react';
import ReactDOM from 'react-dom';

window.deps = {
    'react' : React,
    'react-dom' : ReactDOM,
    'react-datetime' : require('react-datetime'),
};

window.React = React;
window.ReactDOM = ReactDOM;
window.ReactDatetime = window.deps['react-datetime'];