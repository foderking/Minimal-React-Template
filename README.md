# Minimal React Template

A minimal template for building front-end web applications. Comes with parcel, react-bootstrap, and a custom component for adding filler text.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

To run tests:

```sh
npm run test
```
## Using filler text

The filler component provides two modules - DummyParagraph and DummySentence.
They accept the "length" variable as props.

Using DummyParagraph in src/App.js:

```js
....
import DummyParagraph from './Filler/DummyParagraph'

const App = () =>
{
  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <div className='paragraph'>
        <DummyParagraph length={3} />
      </div>
    </div>
  )
}
....
```
<small>renders block of text with 3 paragraphs</small>

Using DummySentence in src/App.js:

```js
....
import DummySentence from './Filler/DummySentence'

const App = () =>
{
  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <div className='sentence'>
        <DummySentence length={3} />
      </div>
    </div>
  )
}
....
```
<small>renders sentence with 3 words</small>

## Running

Open the file `dist/index.html` in your browser or go to the link http://localhost:1234

## Credits

Made with [createapp.dev](https://createapp.dev/)

