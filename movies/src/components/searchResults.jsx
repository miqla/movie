export function SearchResult({ sub_title, data }) {
  return (
    <>
      {data.length > 0 && <p>{sub_title}</p>}
      {/* <p>{sub_title}</p> */}
      <div className="flex gap-2 my-2 overflow-auto pb-2">
        {/* {loading && <p>Loading...</p>}
        {error && <p>Error!</p>} */}
        {/* {!loading && */}
        {data.map((movie) => (
          <div className="card bg-base-100 w-40 shadow-sm" key={movie.id}>
            <figure className="w-40">
              <img
                className="object-cover object-center"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
