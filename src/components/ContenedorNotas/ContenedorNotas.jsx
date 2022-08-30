import React, { useState } from 'react';
import InputComponent from '../InputComponent/InputComponent'
import Notas from '../Notas/Notas';
import './ContenedorNotas.css'
import Swal from 'sweetalert2'


export default function ContenedorNotas() {

  const [valueInput, setvalueInput] = useState([]);

  const getInput = (e) => {
    e.preventDefault();

    if (valueInput.includes(e.target[0].value)) {

      return Swal.fire({
        icon: 'error',
        title: 'Cuidado...',
        text: `No puedes añadir la misma nota: ""${e.target[0].value}""  intenta con otra.`
      })

    } else if (valueInput.length > 4) {

      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Solamente puedes agregar hasta 5 notas en la versión de prueba'
      })

    } else if (e.target[0].value === ''){
      return Swal.fire({
        icon: 'error',
        title: 'Cuidado...',
        text: `No puedes añadir una nota vacia. Intenta escribir algo.`
      })
    }


    setvalueInput([...valueInput, e.target[0].value])
    e.target[0].value = '';
  }

  return (

    <div className='container-notas'>
      <h2>My Notes</h2>
      <InputComponent get={getInput}/>
      {valueInput.map(function callback(element, index, array) {
      return <Notas elemento={valueInput} setvalueInput={setvalueInput} deleteElemento={index} key={element}>{element}</Notas>
      }
      )}
    </div>
  )
}
