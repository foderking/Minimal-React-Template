<h2 align="center">Minimal React Template</h2>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 

</div>

---


## Table of Contents

+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

A minimal template for building front-end web applications. Comes with parcel, react-bootstrap, and a custom component for adding filler text.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Things you'll to install this project..

+ An Operating System with a working shell ( Bash, Powershell, zsh etc.)
+ The latest version of Git

### Installing

First, clone this project to your local system. You could download as a zip file or clone it throught the terminal

Copy and paste on the terminal

```sh
git clone https://github.com/foderking/Minimal-React-Template.git

cd Minimal-React-Template
```

Then install dependencies:

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

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

### Using filler text

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
<sub>renders block of text with 3 paragraphs</sub>

Using DummySentence in src/App.js:

```js
....
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
....
```

<sub>renders sentence with 3 words</sub>

## Credits

[createapp.dev](https://createapp.dev/)