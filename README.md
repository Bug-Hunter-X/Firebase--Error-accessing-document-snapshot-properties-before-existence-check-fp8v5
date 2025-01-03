# Firebase Document Snapshot Error
This repository demonstrates a common error encountered when using the Firebase SDK: attempting to access properties of a document snapshot before verifying its existence.

The `bug.js` file showcases the incorrect implementation, which may throw an error if the document doesn't exist.  The `bugSolution.js` file provides the corrected version, which includes a check for the document's existence using `docSnap.exists()` before accessing any properties. 

This is crucial for preventing unexpected errors and ensuring robust application behavior.