function NotFound() {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "20px 0",
      }}
    >
      <h2>Component Not Found</h2>
      <p>The requested component could not be found.</p>
      <p>Please check if the component is properly imported and used.</p>
    </div>
  );
}

export default NotFound;
