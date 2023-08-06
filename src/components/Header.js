function Header() {
  return <header>
    <nav className="brown darken-1">
      <div className="nav-wrapper">
        <a href="/react-food/" className="brand-logo grey-text text-lighten-3">React Food</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="grey-text text-lighten-3" href="/react-movies/" target="_blank">React Movies</a></li>
          <li><a className="grey-text text-lighten-3" href="/react-shop/" target="_blank">React Shop</a></li>
          <li><a className="grey-text text-lighten-3" href="/react-food/" target="_blank">React Food</a></li>
        </ul>
      </div>
    </nav>
  </header>
}

export {Header};
