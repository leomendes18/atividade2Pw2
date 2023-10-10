import './index.css'
import simbolo from '../../assets/simbolo.png'

export function Input(){
  return (
    <div className='boxInput'>
      <input type="text" className='input' placeholder='Adicione uma nova tarefa'/>
      <button className='button'>
        Criar
        <img src={simbolo}/>
      </button>
    </div>
  )
}