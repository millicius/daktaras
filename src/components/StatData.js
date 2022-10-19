import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { onSnapshot, collection, query, where } from 'firebase/firestore'

const StatData = () => {

  const [protezas, setProtezas] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'surgery23'), where("endoprotezas", "==", true))
    onSnapshot(q, (snapshot) => setProtezas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    }, [])  
  return (
    <div>{protezas.length}</div>
  )
}

export default StatData