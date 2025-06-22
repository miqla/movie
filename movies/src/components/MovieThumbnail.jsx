export function MovieThumbnail({ poster, title, release_date }) {
  return (
    <div className="card bg-base-100 w-40 shadow-sm">
      <figure className="w-40">
        <img
          className="object-cover object-center"
          src={"https://image.tmdb.org/t/p/w500" + poster}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{release_date}</p>
      </div>
    </div>
  );
}
