
const fs = require('fs').promises;
const path = require ('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

function listContacts () {
    return fs.readFile(contactsPath, 'utf-8')
    .then(data => {
        const contacts = JSON.parse(data);
        console.table(contacts);
    })
    .catch(err => console.error) 
  }
  
function getContactById(contactId) {
    return fs.readFile(contactsPath, 'utf-8')
    .then(data=> {
        const contacts = JSON.parse(data);
        console.log(contacts.find(contact => contact.id === contactId));
    })
    .catch(err => console.error) 
  }
  
function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf-8')
    .then(data => {
        const contacts = JSON.parse(data);
        if(!contacts.find(contact => contact.id === contactId)){
           console.log('Sorry we cannot find this contact');
           return;
        }
        const filteredContacts = contacts.filter(({id}) => id !==contactId);
        fs.writeFile(contactsPath, JSON.stringify(filteredContacts), 'utf-8');
        console.log('The contact was successfully deleted')
        listContacts();
    })
    .catch(err => console.error) 
  }
  
function addContact(name, email, phone) {
      const id = Date.now();
      const newContact ={
          id,
          name,
          email,
          phone,
      }
    return fs.readFile(contactsPath, 'utf-8')
        .then(data => {
            const contacts = JSON.parse(data);
            const newContacts =[...contacts, newContact];
            fs.writeFile(contactsPath, JSON.stringify(newContacts), 'utf-8')
            listContacts();
            console.log('Added');
        })
        .catch(err => console.error) 
  }


module.exports={
    listContacts,
    getContactById,
    removeContact,
    addContact
}