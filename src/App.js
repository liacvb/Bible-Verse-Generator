<<<<<<< HEAD
// src/App.js
import React from 'react';
import MyComponent from './components/MyComponent';
import i18n from './i18n';

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
      <MyComponent />
    </div>
  );
}

export default App;
=======
// src/App.js
import React from 'react';
import MyComponent from './components/MyComponent';
import i18n from './i18n';

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
      <MyComponent />
    </div>
  );
}

export default App;
>>>>>>> acbbb6be9ebab94b5a3e7f2d2b866ca5577bc66f
