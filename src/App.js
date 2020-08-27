const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { name: 'Sherlock', animal: 'Cat', breed: 'Domestic Shorthair' }),
        React.createElement(Pet, { name: 'Lola', animal: 'Cat', breed: 'Siamese' }),
        React.createElement(Pet, { name: 'Kali', animal: 'Cat', breed: 'Calico' })
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);