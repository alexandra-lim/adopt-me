import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { name: 'Sherlock', animal: 'Cat', breed: 'Domestic Shorthair' }),
        React.createElement(Pet, { name: 'Lola', animal: 'Cat', breed: 'Siamese' }),
        React.createElement(Pet, { name: 'Kali', animal: 'Cat', breed: 'Calico' })
    ]);
};

render(
    React.createElement(App),
    document.getElementById("root")
);