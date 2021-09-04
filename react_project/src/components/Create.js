import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); // скрываем
  const [formClass, setFormClass] = useState('');
  const [alert, setAlert] = useState('hide');
  const [error, setError] = useState('hide');
  const [createButton, setCreateButton] = useState(
    'btn btn-outline-info create-btn'
  ); // скрываем

  let sendData = (obj) => {
    setFormClass('hide form-group');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        } else {
          setError('text-secondary m-3');
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      //   alert('Заполните поля');
      setAlert('alert alert-danger alert-form');
      setCreateButton('hide');
      return false;
    }
    sendData({ note: note });
    setCreateButton('hide');
  };

  function alertDanger() {
    setAlert('hide');
    setCreateButton('btn btn-outline-info create-btn');
  }
  return (
    <div onClick={alertDanger}>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label className='text-secondary' htmlFor=''>
          Введите заметку
        </label>
        <textarea
          className=' mt-3 mb-3 form-control'
          name='note'
          id='note'
          placeholder='Test'
        ></textarea>
        <button className={createButton} type='submit'>
          Создать
        </button>
      </form>
      <div className={alert}>Заполните поля</div>
      <div className={lineClass}>
        <div className='text-secondary m-3'>{url}</div>
        <div>
          <p className={error}>Что-то пошло не так!Попробуйте еще раз!</p>
          <button
            className='btn btn-outline-info create-btn'
            onClick={function () {
              window.location.reload();
            }}
          >
            Cоздать новую заметку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
