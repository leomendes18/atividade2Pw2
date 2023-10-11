import './index.css'

export function Section({totalTecno}) {
  return (
    <div className='boxSection'>
      <div className='boxTec'>
        <div className='divTec'>
          <p className='tecCriada'>Tecnologias criadas</p>
          <p className="quantidade">{totalTecno}</p>
        </div>
        <div className='divTec'>
          <p className='tecConcluida'>Concluídas</p>
          <p className="quantidade">0</p>
        </div>
      </div>
    </div>
  )
}