import React from 'react';
import './InputComponent.css'

export default function InputComponent({ get }) {

  return (
    <>
      <form onSubmit={get} >
        <div className="input-wrapper">
          <input className="input" name="text" placeholder="Type here your note..." type="text" autoComplete="ofsf" />
        </div>
        <button className="icon-btn add-btn" type='submit'>
          <div className="add-icon"></div>
          <div className="btn-txt">Add Note</div>
        </button>
      </form>
    </>
  )
}
