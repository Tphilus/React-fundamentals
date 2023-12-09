const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count++;
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
