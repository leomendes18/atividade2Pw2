import './index.css'
import lixeira from '../../assets/lixeira.png'

export function Card({tec}){
  return(
    <div>
      <div className='cards'>
        <input type="checkbox" className='checkbox'/>
        <p className='cardName'>{tec.name}</p>
        <button className='buttonLixeira'>
          <img src={lixeira} className='lixeira'/>
        </button>
      </div>
    </div>
  )
}