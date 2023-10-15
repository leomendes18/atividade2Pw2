import './index.css'
import lixeira from '../../assets/lixeira.png'

export function Card({tec, remover, isCheckbox}){
  const remover2 = () => {
    remover(tec.id)
  }
  const isCheckbox2 = () => {
    isCheckbox(tec.id)
  }
  return(
    <div>
      <div className='cards'>
        <input 
          type="checkbox" 
          className='check'
          onChange={isCheckbox2}
        />

        {
          tec.checked === true && (
            <del className='cardNameLine'>{tec.name}</del>
          )
        }
        {
          tec.checked === false && (
            <p className='cardName'>{tec.name}</p>
            )
        }  
          
        <button className='buttonLixeira' onClick={remover2}>
          <img src={lixeira} className='lixeira'/>
        </button>
      </div>
    </div>
  )
}