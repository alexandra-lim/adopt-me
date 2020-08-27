import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Sherlock" animal="Cat" breed="Domestic Shorthair" />
            <Pet name="Kali" animal="Cat" breed="Siamese" />
        </div>
    )
};

render(
    <App />,
    document.getElementById("root")
);