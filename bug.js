The Firebase SDK may throw an error if you try to access a property of a document snapshot before the `snapshot.exists` check is made.  For example:
```javascript
// Incorrect code
const docRef = doc(db, 'collection', 'docID');
const docSnap = await getDoc(docRef);
console.log(docSnap.data().someProperty); // May throw an error if doc doesn't exist

// Correct code
const docRef = doc(db, 'collection', 'docID');
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log(docSnap.data().someProperty);
}
```