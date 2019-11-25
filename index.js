const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./staff.json");

const collectionKey = "ServiceProvider/10001/services"; //name of the collection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sweng-581-capstone.firebaseio.com/"
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
console.log(data)
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}
