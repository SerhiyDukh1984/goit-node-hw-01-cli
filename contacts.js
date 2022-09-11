const fs = require('fs/promises');
const path = require("path");

const contactsPath = path.join('./db/contacts.json');

async function listContacts() {
    const result = await fs.readFile(contactsPath);

    return JSON.parse(result);
};

function getContactById(contactId) {
  // ...твій код
}


function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
 listContacts,
  getContactById,
  // removeContact,
  // addContact,
};
