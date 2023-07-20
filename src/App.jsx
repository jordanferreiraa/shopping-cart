import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function App() {

  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  );
}

export default App;
