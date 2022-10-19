import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { onSnapshot, collection, query, where } from 'firebase/firestore'

const Ekstra = () => {

  const [ekstra, setEkstra] = useState([])
  
  useEffect(() => {
    const q = query(collection(db, 'surgery23'), where("skuba", "==", "ekstrine"))
    onSnapshot(q, (snapshot) => setEkstra(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
  }, [])

  return (
    <div>{ekstra.length}</div>
  )
}

export default Ekstra