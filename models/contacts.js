const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const booksPath = path.join(__dirname, "contacts.json");

const getAllContacts = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};
const addAContact = async (data) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(booksPath, JSON.stringify(contacts, null, 2));
  return newContact;
};
const getContactById = async (id) => {
  const contacts = await getAllContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result || null;
};
const updateContactById = async (id, data) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(booksPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};
const removeContactById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = {
  getAllContacts,
  addAContact,
  getContactById,
  removeContactById,
  updateContactById,
};
