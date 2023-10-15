import './App.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Section } from './components/Section'
import { Card } from './components/Card'
import { useState } from 'react'
let id = 0

function App() {
  const [tecno, setTecno] = useState('')
  const [arrayTec, setArrayTect] =  useState<Object[]>([])
  let[concluido, setConcluido] = useState(0)
  
  const handleTecno = (event) => {
    setTecno(event.target.value)
  }
  const add = (event) => {
    const newList = arrayTec.concat({name: tecno, id: id, checked: false})
    setTecno('')
    setArrayTect(newList)
    id += 1
  }
  const remover = (id) => {
    const newList = arrayTec.filter((tec) => {  
      if(tec.id !== id){
        return tec
      } else{
        if(tec.checked === true){
          setConcluido(concluido -= 1)
        }
      }
    })
    setArrayTect(newList)
  }


  const isCheckbox = (id) => {
    const newList = arrayTec.map((tec) => {
      if(tec.id === id){
        const tecChecked = {
          ...tec,
          id: id,
          checked: !tec.checked
        }
        if(tecChecked.checked === true){
          setConcluido(concluido += 1)
        } else{
          setConcluido(concluido -= 1)
        }
        return tecChecked
      }
      return tec
    })
    setArrayTect(newList)
  }

  return (
    <div>
      <Header />
      <Input adicionar={add} handle={handleTecno}/>
      <Section 
        totalTecno={arrayTec.length}
        concluido = {concluido}
      />
      {
        arrayTec.length === 0 && (
          <div className='semTecnologia'>
            <p className='text'>Você ainda não tem tecnologias cadastradas </p>
            <p className='text2'>Crie tecnologia e organize seus itens a fazer</p>
          </div>
        )
      }
      {
        arrayTec.map((tec) => (
          <Card  
            tec={tec} 
            remover={remover} 
            isCheckbox={isCheckbox}
          />
        ))

      }

    </div>
  )
}

export default App
