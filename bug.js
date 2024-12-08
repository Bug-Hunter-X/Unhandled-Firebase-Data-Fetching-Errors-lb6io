```javascript
// Function to fetch data from Firebase
async function fetchData(collection) {
  try {
    const snapshot = await db.collection(collection).get(); // Assuming 'db' is your Firebase database instance
    const data = snapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Handle the error appropriately
  }
}

// Example usage:
fetchData('users').then(users => {
  if (users) {
    console.log('Users:', users);
  } else {
    console.log('Failed to fetch users.');
  }
});
```