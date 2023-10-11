import './App.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Section } from './components/Section'
import { Card } from './components/Card'
import { useState } from 'react'



function App() {
  const [tecno, setTecno] = useState('')
  const [arrayTec, setArrayTect] =  useState<Object[]>([])
  	
  const handle = (event) => {
    setTecno(event.target.value)
  }
  const add = (event) => {
    const newList = arrayTec.concat({name: tecno})
    setTecno('')
    setArrayTect(newList)
  }
  console.log(arrayTec)

  return (
    <div>
      <Header />
      <Input adicionar={add} handle={handle}/>
      <Section totalTecno={arrayTec.length}/>
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
          <Card  tec={tec} />
        ))

      }

    </div>
  )
}

export default App
