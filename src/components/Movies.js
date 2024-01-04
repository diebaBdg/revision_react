import React from "react";
function Movies(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>RELEASE</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((movie, index) => (
            <tr key={index}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.releaseYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Movies;
