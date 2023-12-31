function InnerComponent(props) {
  const data = props.data;
  return (
    <div>
      <h2>{props.title}</h2>
      {props.showData && (
        <ul className="list-group">
          {data.map(verse => (
            <li key={verse.id} className="list-group-item">{verse.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InnerComponent;