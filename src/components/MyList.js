const MyList = () => {
  const data = ["Daffy", "Porky", "Bugs", "Speedy"];
  return (
    <div>
      <h1>Looney Tunes Actors below : </h1>
      <ul className="list-group">
        {data.map(actor => (
          <li className="list-group-item">{actor}</li>
        ))}
      </ul>
    </div>
  );
};
export default MyList;
