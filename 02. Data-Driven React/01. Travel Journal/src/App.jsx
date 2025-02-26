import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entryElements = data.map((enter) => {
    const { id, img, title, country, googleMapsLink, dates, text } = enter;

    return (
      <Entry
        id={id}
        img={img}
        title={title}
        country={country}
        googleMapsLink={googleMapsLink}
        dates={dates}
        text={text}
      />
    );
  });

  return (
    <>
      <Header />
      <main>{entryElements}</main>
    </>
  );
}

export default App;
