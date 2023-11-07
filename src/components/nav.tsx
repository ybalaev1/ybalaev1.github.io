import logo from '../logo512.png';
const Navigation = () => {
    return (
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid ">
      <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="30"/>
       </a>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    )
};
export default Navigation;