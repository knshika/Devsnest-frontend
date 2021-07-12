const Chess = () => {
  const Square = () => {
    return <div className="square"></div>;
  };
  const Row = () => {
    return (
      <div className="row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  };
  return (
    <div className="day16">
      <div className="chessBoard">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default Chess;
