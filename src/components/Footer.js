function Footer() {
  return <footer className="page-footer brown darken-2">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About the Project</h5>
          <p className="grey-text text-lighten-4">React app about food.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Other Projects</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="/react-movies/" target="_blank">React Movies</a></li>
            <li><a className="grey-text text-lighten-3" href="/react-shop/" target="_blank">React Shop</a></li>
            <li><a className="grey-text text-lighten-3" href="/react-food/" target="_blank">React Food</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2023 Copyright
        <a className="right grey-text text-lighten-3" href="https://github.com/nick2101/react-food" target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
  </footer>
}

export {Footer};
