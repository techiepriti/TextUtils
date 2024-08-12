import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link to={"/TextForm"} className="navbar-brand" href="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/TextForm"} className="nav-link active" aria-current="page" >{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link to={"/About"} className="nav-link">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/techiepriti">Developer's profile</a>
        </li>
      </ul>
      {/* <div className={`form-check form-switch me-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch mode</label>
      </div>
      <form className="d-flex" role="search" style={{backgroundcolor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" style={{backgroundcolor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                   aboutText: PropTypes.string
}

Navbar.defaultProps = {
titile: "Add title here",
aboutText: "About"
}