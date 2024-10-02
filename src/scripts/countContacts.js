import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const countedContacts = contacts.length;
    console.log(`Total contacts: ${countedContacts}`);
    return countedContacts;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

console.log(await countContacts());
