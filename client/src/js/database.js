import { openDB } from 'idb';

// Initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },

  });
// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
// Open the db
  const db = await initdb();
// Create a transaction
  const tx = db.transaction('jate', 'readwrite');
// Get the object store
  const store = tx.objectStore('jate');
  // Add the content to the object store
  await store.add(content);

  console.error('putDb not implemented');
}






// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
