
const fs = require('fs').promises;
const path = require ('path');

const contactsPath = path.join('./db.contacts.json');

// TODO: задокументировать каждую функцию
function listContacts () {
    fs.readFile(contactsPath)
    .then(data => console.log(data))
    .catch(err => console.error) 
  }
  
  function getContactById(contactId) {
    fs.readFile(contactsPath)
    .then(data => {
        const contacts = JSON.parse(data);
        console.log(contacts.find(id)===contactId);
    })
    .catch(err => console.error) 
  }
  
  function removeContact(contactId) {
    fs.readFile(contactsPath)
    .then(data => {
        const contacts = JSON.parse(data);
        console.log(contacts.filter(id)!==contactId);
    })
    .catch(err => console.error) 
  }
  
  function addContact(name, email, phone) {
      const id = Date.now();
      const contact ={
          id,
          name,
          email,
          phone,
      }
        fs.readFile(contactsPath)
        .then(data => {
            fs.write(...data, contact);
        })
        .catch(err => console.error) 
  }


module.export={
    listContacts,
    getContactById,
    removeContact,
    addContact
}