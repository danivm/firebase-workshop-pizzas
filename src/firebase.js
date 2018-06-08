import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCMS6_Dl00vQvPrJv0QOpl8zLnTytfdIsg',
  authDomain: 'fir-workshop-e2803.firebaseapp.com',
  databaseURL: 'https://fir-workshop-e2803.firebaseio.com',
  projectId: 'fir-workshop-e2803',
  storageBucket: 'fir-workshop-e2803.appspot.com',
  messagingSenderId: '125257442814'
})

const storage = firebase.storage()

export default storage
