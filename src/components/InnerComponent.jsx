function InnerComponent(props) {
  const data = props.data;
  return (
    <div>
      <h2>{props.title}</h2>
      {props.showData && (
        <ul className="list-group">
          {data.map(item => (
            <li key={item.id} className="list-group-item">{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InnerComponent;