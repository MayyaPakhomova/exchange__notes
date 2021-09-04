function Main() {
  return (
    <>
      <div className=' p-5 d-flex justify-content-center'>
        <div className='px-2'>
          <a
            className='p-2 px-3 text-info border border-info main-link '
            href='/create'
          >
            Создать Note
          </a>
        </div>
        <div className='px-2'>
          <a
            className='p-2 px-3 border border-info text-info main-link'
            href='/note'
          >
            Просмотреть Note
          </a>
        </div>
      </div>
      <div className='col-8 mx-auto text-secondary'>
        <p>
          <strong>Share Notes</strong> - сервис для обмена заметками.Создайте
          заметку,отправьте на нее ссылку и ваш друг сможет ее
          посмотреть.После просмотра заметку можно удалить
        </p>
        <ol className='mt-3 mb-3'>
          Как сделать заметку?
          <li className='numbered-list ml-5'><small>
            Пройдите по ссылке Create</small>
          </li>
          <li className='numbered-list'><small>Вставьте текст и нажмите Создать</small></li>
          <li className='numbered-list'><small>
            Отправьте сгенерированный адрес другу</small>
          </li>
        </ol>
        <p>
          Как прочитать заметку?Перейдите по присланому URL,либо введите адрес
         по ссылке Note
        </p>
      </div>
    </>
  );
}

export default Main;
