const fs = require('fs').promises;
const path = require("path");
const contactsList = require("./db/contacts.json");

const contactsPath = path.resolve("contacts.json");


function listContacts() {
    fs.readFile('./db/contacts.json')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
}

// console.log(listContacts());
// listContacts();

function getContactById(contactId) {
    fs.readFile('./db/contacts.json')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
}

getContactById(1);

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
