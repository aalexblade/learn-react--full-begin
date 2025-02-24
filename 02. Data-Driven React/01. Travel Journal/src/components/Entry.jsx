function Entry({ img, title, country, googleMapsLink, dates, text }) {
   
  return (
    <article className="article-view container">
      <div className="article-img">
        <img src={img.src} alt={img.alt}/>
      </div>

      <div className="article-wrap-content">
        <div className="article-wrap">
          <img src="src/img/marker.png" alt="local" />
          <span>{country}</span>
          <a href={googleMapsLink}>
            View on Google Maps
          </a>
        </div>

        <h2 className="article-title">{title}</h2>
        <p className="article-text">{dates}</p>
        <p className="text">
          {text}
        </p>
      </div>
    </article>
  );
}

export default Entry;
