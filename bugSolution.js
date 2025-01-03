The solution is to always check if the document exists before accessing any of its properties:
```javascript
// Correct code
const docRef = doc(db, 'collection', 'docID');
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log(docSnap.data().someProperty);
} else {
  console.log('No such document!');
}
```
Additionally, consider using optional chaining (?.) and nullish coalescing (??) operators to gracefully handle cases where a property might be missing:
```javascript
console.log(docSnap.data()?.someProperty ?? 'Property not found');
```