import useApi from '../../custom-hooks/use-api';

const Favourite = () => {
  const { data, isLoading, getData } = useApi(
    'https://official-joke-api.appspot.com/random_joke',
  );

  return (
    <>
      <div>
        {isLoading ? (
          'loading'
        ) : (
          <>
            <h1>{data.setup}</h1>
            <h1>{data.punchline}</h1>
            <button type="button" onClick={getData}>
              new Joke
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Favourite;
