import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { onSnapshot, collection, query, where } from 'firebase/firestore'

const Skuba = () => {

  const [skuba, setSkuba] = useState([])
  
  useEffect(() => {
    const q = query(collection(db, 'surgery23'), where("skuba", "==", "planine"))
    onSnapshot(q, (snapshot) => setSkuba(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
  }, [])

  return (
    <div>{skuba.length}</div>
  )
}

export default Skuba