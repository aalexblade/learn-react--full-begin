function Images() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function HandleMouseOver() {
    console.log("HandleMouseOver!");
  }
  return (
    <>
      <img
        onMouseOver={HandleMouseOver}
        src="http://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Images;
