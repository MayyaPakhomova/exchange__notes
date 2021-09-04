import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide'); // скрываем
  const [errorClass, setErrorClass] = useState('hide');
  const [alert, setAlert] = useState('hide');
  const [repeat, setRepeat] = useState('hide');
   const [createButton, setCreateButton] = useState(
     'btn btn-outline-info note-btn'
   );// скрываем

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass('col text-center');
            setFormClass('hide');
            setErrorClass('hide');
            setRepeat('hide');
          } else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
            setRepeat('btn btn-outline-info create-btn');
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
      setRepeat('hide');
    }
  }, [noteURL]);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      setAlert('alert alert-danger alert-form');
      setCreateButton('hide');
      return false;
    }
    if (url.length !== 24) {
      setLineClass('hide');
      setFormClass('hide');
      setErrorClass('');
      setRepeat('btn btn-outline-info create-btn');
    } else {
      window.location.href = env.url + '/' + url;
    }
  }
  function searchNote() {
    window.location.href = env.url;
  }
  function alertDanger() {
    setAlert('hide');
    setCreateButton('btn btn-outline-info note-btn');
  }
  return (
    <div onClick={alertDanger}>
      <div className={lineClass}>
        <h4>Note:</h4>
        <div className=' m-3'>{noteText}</div>
        <div>
          <button
            className='btn btn-outline-info note-btn'
            onClick={searchNote}
          >
            Смотреть еще один Note
          </button>
        </div>
      </div>
      <div className={errorClass}>
        <p>Произошла ошибка. Такой note не найден!!</p>
      </div>
      <div className={formClass}>
        <div className={alert}>Заполните поля</div>
        <form className='form-group' action='' onSubmit={getNote}>
          <label className='text-secondary' htmlFor='url'>
            Введите hash заметки
          </label>
          <input
            type='text'
            name='url'
            id='url'
            className=' mt-3 mb-3 form-control'
          />
          <button type='submit' className={createButton}>
            Искать Note
          </button>
        </form>
      </div>
      <button
        className={repeat}
        onClick={function () {
          window.location.href = env.url;
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );
}

export default Note;
