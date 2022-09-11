const {listContacts, getContactById, addContact, removeContact} = require('./contacts');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const contactsList = await listContacts();
          console.log(contactsList);
      break;

    case "get":
            const contactById = await getContactById(id);
            console.log(contactById)
      break;

    case "add":
            const newContactEl = await addContact(name, email, phone);
            console.log(newContactEl)
      break;

    case "remove":
            const contactEl = await removeContact(id);
            console.log(contactEl);
            break;
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: 'list'});
// invokeAction({ action: 'get', id: '3'});
// invokeAction({ action: 'add', name: 'Міша', email: 'tsynkevych@gmail.com', phone: '123-456-7890' });
// invokeAction({ action: 'remove', id: '10'})

invokeAction(argv);


// COMANDS FOR TERMINAL

// node index.js --action="list"
// node index.js --action="get" --id=5
// node index.js --action="add" --name="Bob" --email="bob@gmail.com" --phone="322-22-44"
// node index.js --action="remove" --id=3