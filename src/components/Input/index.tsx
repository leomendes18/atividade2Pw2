import './index.css'
export function Input(){
  return (
    <div className='boxInput'>
      <input type="text" className='input' placeholder='Adicione uma nova tarefa'/>
      <button>Criar</button>
    </div>
  )
}