export function MovieThumbnail({ poster, title, release_date }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={"https://image.tmdb.org/t/p/w220_and_h330_face" + poster}
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
