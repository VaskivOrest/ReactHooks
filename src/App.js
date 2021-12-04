import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  id: "+380739432123",
  gender: "male",
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+38095631521",
  gender: "male"
}];

function App() {
  return (
    <div className="App">
      <h1>Contacts</h1>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
