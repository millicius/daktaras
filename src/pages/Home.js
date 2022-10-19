import Ekstra from "../components/Ekstrine"
import Skuba from "../components/Skuba"
import StatData from "../components/StatData"
import VisosOp from "../components/VisosOp"


const Home = () => {
  return (
    <div className="home">
        <div className="heroe">
          <div className="heroe-text">
            <h1>Operacijos, kurios niekur nedings.</h1>
          </div>
        </div>
        <div className="surgery-stats">
          <div className="surgery-header">
            <h2>Operacijų statistika</h2>
          </div>
          <div className="stats-container">
            <div className="stats-all">
              <h4>Visos operacijos</h4>
              <VisosOp />
            </div>
            <div className="stats-plan">
              <h4>Planinės</h4>
              <Skuba />
            </div>
            <div className="stats-extra">
              <h4>Ekstrinės</h4>
              <Ekstra />
            </div>
            <div className="stats-ep">
              <h4>EP</h4>
              <StatData />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home