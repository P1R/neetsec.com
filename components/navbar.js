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
    if (document.scrollingElement.scrollTop > 40) {
      myNav.classList.add("colored-container");
      myNav.classList.remove("transparent-container");
      myNav.style.padding = "11px 10px";
    }
    else {
      myNav.classList.add("transparent-container");
      myNav.classList.remove("colored-container");
      myNav.style.padding = "60px 10px";
    }
  };


  render() {
    
    return (
      <div className="navbar-fixed">
        <Header />
        <nav id="mynav" >
          <div className="nav-wrapper container">
            <Link href="/index"><a href="#!" className="brand-logo"><img  src="../static/images/1400/logo(1400)-.png"></img></a></Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
            <ul className="left logo-text hide-on-med-and-down"></ul>
            <ul className="navlink right hide-on-med-and-down">
              <li><Link href="/"><a>{this.props.t('Home')}</a></Link></li>
              <li><Link href="/about"><a>{this.props.t('About')}</a></Link></li>
              <li><Link href="/products"><a>{this.props.t('ProductsAndServices')}</a></Link></li>
              <li><Link href="/"><a 
                                    onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}>
                                    {this.props.t('ES')}</a></Link></li>
              <div className="right lastchild-nav valign-wrapper"><li><Link href="/team"><a className="valign-wrapper">{this.props.t('Meet the team')}</a></Link></li></div>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><Link href="/index"><a className="white-text">Homes</a></Link></li>
          <li><Link href="/about"><a className="white-text">About</a></Link></li>
          <li><Link href="/products"><a className="white-text">Products and Services</a></Link></li>
          <li><Link href="/team"><a className="white-text">Meet the team</a></Link></li>
          <li><Link href="/"><a 
                                    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                                    {this.props.t('EN')}</a></Link></li>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withNamespaces('navbar')(Navbar)
