function Error() {
  return (
    <>
      <div cl>
        <h1 className='m-3 mb-5 text-secondary text-center'>
          404 page not found
        </h1>
        <a
          className='p-2 px-3 border border-info text-info error-link'
          href='http://localhost:3000/'
        >
          Вернуться на главную
        </a>
      </div>
    </>
  );
}

export default Error;
