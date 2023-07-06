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
  
  // Open the db
  const db = await openDB("jate", 1);
  
  // Create a transaction
  const tx = db.transaction("jate", "readwrite");
  
  // Get the object store
  const store = tx.objectStore("jate");
  
  const request = store.add ({content: content})
  
  // Add the content to the object store
  const result = await request;
  
  
  console.log('Content added to jate database:', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the db
  const db = await openDB('jate', 1);
  // Create a transaction
  const tx = db.transaction("jate", "readonly");
  // Get the object store
  const store = tx.objectStore("jate");

  // Use get.All() to get all the content from the object store
  // This is an array of objects, not an array of strings
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('Content fetched from jate database', result);

  // Return the content property of the last object in the result array
  return result[result.length - 1].content;
};

initdb();
