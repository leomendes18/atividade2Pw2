import './index.css'

export function Section({totalTecno, concluido}) {
  return (
    <div className='boxSection'>
      <div className='boxTec'>
        <div className='divTec'>
          <p className='tecCriada'>Tecnologias criadas</p>
          <p className="quantidade">{totalTecno}</p>
        </div>
        <div className='divTec'>
          <p className='tecConcluida'>Concluídas</p>
          <p className="quantidade2">{concluido} de {totalTecno}</p>
        </div>
      </div>
    </div>
  )
}