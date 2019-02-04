import { Component } from 'react'
import Link from 'next/link'
import Header from './head'
import PropTypes from 'prop-types'
import { i18n, withNamespaces } from '../i18n'


class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    //Init the sidenav bar for mobile.
    var elems = document.querySelectorAll('.sidenav');
    const M = require('materialize-css');
    M.Sidenav.init(elems);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    var myNav = document.getElementById('mynav');
    myNav.scrollTop;
    if (document.scrollingElement.scrollTop > 50) {
      myNav.classList.add("colored-container");
      myNav.classList.remove("transparent-container");
      myNav.style.padding = "65px 10px";
    }
    else {
      myNav.classList.add("transparent-container");
      myNav.classList.remove("colored-container");
      myNav.style.padding = "90px 10px";
    }
  };


  render() {
    
    return (
      <div className="navbar-fixed">
        <Header />
        <nav id="mynav" className="">
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo"><img src="../static/images/logo_nsi.png"></img></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="left logo-text hide-on-med-and-down">NeetSec International</ul>
            <ul className="navlink right hide-on-med-and-down">
              <li><Link href="/"><a>{this.props.t('Home')}</a></Link></li>
              <li><Link href="/about"><a>{this.props.t('About')}</a></Link></li>
              <li><Link href="/products"><a>{this.props.t('Products and Services')}</a></Link></li>
              <li><Link href="/"><a 
                                    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                                    {this.props.t('EN')}</a></Link></li>
              <div className="right lastchild-nav valign-wrapper"><li><Link href="/team"><a className="valign-wrapper">{this.props.t('Meet the team')}</a></Link></li></div>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><Link href="/index"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/products"><a>Products and Services</a></Link></li>
          <li><Link href="/index"><a>Meet the team</a></Link></li>
          <li><Link href="/index"><a>EN</a></Link></li>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withNamespaces('navbar')(Navbar)
