function MainContainer(props) {
    return (
      <div className="container my-4">
        <h1 className="display-4">{props.title}</h1>
        <InnerComponent
          title="List of Items"
          showData
          data={[
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
          ]}
        />
      </div>
    );
  }
  export default MainContainer