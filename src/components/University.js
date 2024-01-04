const University = ({ name, capacity, location }) => (
  <p className="alert alert-success display-4">
    <u>Name</u> : {name}, <u>Capacity</u> : {capacity}, <u>location</u> :{" "}
    {location}.
  </p>
);

export default University;
