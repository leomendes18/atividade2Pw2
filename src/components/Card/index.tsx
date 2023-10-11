import './index.css'
import lixeira from '../../assets/lixeira.png'

export function Card({tec}){
  return(
    <div>
      <div className='cards'>
        <input type="checkbox" className='check'/>
        <p className='cardName'>{tec.name}</p>
        <button className='buttonLixeira'>
          <img src={lixeira} className='lixeira'/>
        </button>
      </div>
    </div>
  )
}