import { openDB } from "idb";

// Initialize the database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('1');
  // Open the db
  const db = await openDB("jate", 1);
  console.log('2');
  // Create a transaction
  const tx = db.transaction("jate", "readwrite");
  console.log('3');
  // Get the object store
  const store = tx.objectStore("jate");
  console.log('4');
  const request = await store.add ({content: content})
  console.log('5');
  // Add the content to the object store
  const result = await request;
  console.log('5');
  
  console.log('Content added to jate database:', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the db
  const db = await initdb();
  // Create a transaction
  const tx = db.transaction("jate", "readonly");
  // Get the object store
  const store = tx.objectStore("jate");
  // Get all the content in the store
  const content = await store.getAll();
  console.log("Content fetched from jate database");
  return content;
};

initdb();
