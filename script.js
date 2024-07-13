
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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

  // Access form and listen for submit event
  const form = document.getElementById('dataForm');
  form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form values
      const date = form.date.value;
      const category = form.category.value;
      const price = parseFloat(form.price.value); // Convert to number
      const token = form.token.value;
      
      // Add data to Firestore
      try {
          const docRef = await addDoc(collection(db, 'data'), {
              date: date,
              category: category,
              price: price,
              token: token
          });
          console.log('Document written with ID: ', docRef.id);
          alert('Data added successfully!');
          form.reset(); // Reset form after submission
      } catch (error) {
          console.error('Error adding document: ', error);
          alert('Failed to add data.');
      }
  });

