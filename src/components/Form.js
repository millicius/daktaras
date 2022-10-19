import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const [surgDate, setSurgDate] = useState('')
  const [diagnosis, setDiagnosis] = useState('')  
  const [surgery, setSurgery] = useState('')  
  const [skuba, setSkuba] = useState('planine')  
  const [endoprotezas, setEndoprotezas] = useState(false)

  const opCollRef = collection(db, 'surgery23')
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(opCollRef, { surgDate, diagnosis, surgery, skuba, endoprotezas  })
    setDiagnosis('')
    setSurgery('')
    setSurgDate('')
    navigate('/surgery')
  }

  return (
    <div className="surgeryForm">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="formLine">
            <label>Operacijos data</label>
            <input type="date" name='surgDate' value={surgDate} onChange={e => setSurgDate(e.target.value)} />
          </div>
          <div className="formLine">
            <label>Diagnozė</label>
            <input type="text" name='diagnosis' value={diagnosis} onChange={e => setDiagnosis(e.target.value)} />
          </div>
          <div className="formLine">
            <label>Operacijos pavadinimas</label>
            <textarea name='surgery' value={surgery} onChange={e => setSurgery(e.target.value)}></textarea>
          </div>
          <div className="formLine">
            <label>Skuba</label>
            <select name='skuba' onChange={e => setSkuba(e.target.value)}>
              <option value='planine'>planinė</option>
              <option value='ekstrine'>ekstrinė</option>
            </select>
          </div>
          <div className="formLine">
            Endoprotezas
            <input type="checkbox" name='endoprotezas' checked={endoprotezas} onChange={() => setEndoprotezas(!endoprotezas)} />
          </div>
          <button className="formBtn">Sukurti</button>
        </form>
      </div>
    </div>
  )
}

export default Form