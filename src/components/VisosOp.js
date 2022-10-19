import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore'

const VisosOp = () => {

  const [operacijos, setOperacijos] = useState([])
  
  useEffect(
    () => onSnapshot(collection(db, 'surgery23'), (snapshot) => setOperacijos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []) 
  return (
    <div>{operacijos.length}</div>
  )
}

export default VisosOp