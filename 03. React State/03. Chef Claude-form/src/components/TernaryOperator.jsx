function TernaryOperator() {
  const isGoingOut = true;

  return (
    <>
      <h1>Do I file like gouing out tonight?</h1>
      <button>{isGoingOut ? "yes" : "no"}</button>
    </>
  );
}

export default TernaryOperator;
