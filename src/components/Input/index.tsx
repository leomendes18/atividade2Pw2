import './index.css'
import simbolo from '../../assets/simbolo.png'


export function Input({adicionar, handle}){

  return (
    <div className='boxInput'>
      <input 
        type="text" 
        className='input' 
        placeholder='Adicione uma nova tarefa'
        onChange={handle}
      />
      <button className='button' onClick={adicionar}>
        Criar <img src={simbolo}/>
      </button>
    </div>
  )
}