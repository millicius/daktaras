import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import SurgTotal from '../components/SurgTotal'

const Surgery = () => {

  const [operacijos, setOperacijos] = useState([])

  useEffect(() => {
  const q = query(collection(db, 'surgery23'), orderBy('surgDate', 'desc'))
  onSnapshot(q, (snapshot) => setOperacijos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
  }, []) 
  return (
    <div className="surgery">

      <SurgTotal operacijos={operacijos.length} />

      <div className='operacijos-box'>
          {operacijos.map((operacija) => 
          (
            <div className="card" key={operacija.id}>
        <div className="opDate">
          <p>{operacija.surgDate}</p>
        </div>
        <div className='divider'></div>
        <div className="opContent">
          <div className="opDiagnosis">
            <h3>{operacija.diagnosis}</h3>
          </div>
          <div className="opTitle">
            <p>{operacija.surgery}</p>
          </div>
        </div>
        <div className="opFooter">
          <div className="skuba">
            <p>{operacija.skuba}</p>
          </div>
          <div className="endoprotezas">
            <p>{operacija.endoprotezas === true ? 'EP' : ""}</p>
          </div>
        </div>
      </div>
          ))}
      </div>
      
    </div>
  )
}

export default Surgery