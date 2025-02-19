function Entry() {
  return (
    <article className="article-view container">
      <div className="article-img">
        <img src="src/img/MountFuji.png" alt="Photo Mount Fuji" />
      </div>

      <div className="article-wrap-content">
        <div className="article-wrap">
          <img src="src/img/marker.png" alt="local" />
          <span>JAPAN</span>
          <a href=" ">View on Google Maps</a>
        </div>

        <h2 className="article-title">Mount Fuji</h2>
        <p className="article-text">12 Jan, 2023 - 24 Jan, 2023</p>
        <p className="text">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}

export default Entry;
