function Entry(props) {
  return (
    <article className="article-view container">
      <div className="article-img">
        <img src={props.img.src} alt={props.img.alt} />
      </div>

      <div className="article-wrap-content">
        <div className="article-wrap">
          <img src="src/img/marker.png" alt="local" />
          <span>{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>

        <h2 className="article-title">{props.title}</h2>
        <p className="article-text">{props.dates}</p>
        <p className="text">{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;
