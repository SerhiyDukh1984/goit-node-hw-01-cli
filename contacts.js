const fs = require('fs/promises');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

async function listContacts() {
    const result = await fs.readFile(contactsPath);

    return JSON.parse(result);
};

async function getContactById(contactId) {
    const contactsList = await listContacts();
    const contactEl = contactsList.find(({id}) => id === contactId);

    if (!contactEl) {
        throw new Error('Contact not found');
    }

    return contactEl;
}

async function addContact(name, email, phone) {
    const contactsList = await listContacts();
    const  newContactEl = {
        id: uuidv4(),
        name, 
        email,
        phone
    }

    contactsList.push( newContactEl);

    fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));

    return newContactEl;
}

async function removeContact(contactId) {
    const contactsList = await listContacts();
    const index = contactsList.findIndex(({id}) => id === contactId);

    if (index === -1) {
        throw new Error('Contact not found');
    }

    const [result] = contactsList.splice(index, 1);

    fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));

    return result;
}


module.exports = {
 listContacts,
  getContactById,
  addContact,
  removeContact,
};
