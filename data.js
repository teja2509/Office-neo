// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5eTliL1fln_8oRuj0V1O-ZIBGA5DS5iI",
    authDomain: "office-neo.firebaseapp.com",
    projectId: "office-neo",
    storageBucket: "office-neo.appspot.com",
    messagingSenderId: "3888727028",
    appId: "1:3888727028:web:23f950f5d50d9e0c61afa1",
    measurementId: "G-1P012X5VPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Reference to the table body element
const tableBody = document.querySelector('#data-table tbody');

// Function to display data in table
async function displayData() {
    tableBody.innerHTML = ''; // Clear current data
    try {
        const querySnapshot = await getDocs(collection(db, 'expenses'));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log('Document data:', data);
            const row = document.createElement('tr');
            row.innerHTML = `<td>${data.date}</td><td>${data.category}</td><td>${data.price}</td>`;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error getting documents: ', error);
    }
}

// Initial data display
displayData();
