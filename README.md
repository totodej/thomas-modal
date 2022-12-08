# @thomas-modal

This package is a part of the project 14 of the OpenClassrooms "Front End Developer" courses. For this one I had to turn an old JQuery website into a full react app.
If you want to see the rest of the project it's right there : https://github.com/totodej/ThomasDejardins_14_03112022

We had 4 differents options and I choose to make a react modal component as an npm package.

You can find on npm here : https://www.npmjs.com/package/@hrnet/thomas-modal

## Installation

In your project, run the following command :

`npm install @thomas-modal`

So now you have access to the modal component, you can add it to your project, for example like that :

```
<Modal close={() => setModalIsOpen(false)} />
```

One last important thing : you need to define the following useState `const [modalIsOpen, setModalIsOpen] = useState(false)` where you use the component in order to make it work. Without it you will not be able to display the modal !

## Technologies

- React
- React-Router-Dom
- Font Awesome
- Babel
- Rimraf
