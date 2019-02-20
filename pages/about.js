
import PropTypes from 'prop-types'

import { withNamespaces } from '../i18n'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

class About extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['about', 'navbar'],
    }
  }
  render() {
    return (
      <div className="about-main">
        <style jsx>{`
      .about-main{
        background-image: url("../static/images/800/HUELLA-DERECHA-(800)-.png");
        background-repeat: no-repeat;
        background-position:right top;
        background-size: 52% 43%;
      }      
    `}</style>
        <Navbar />
        <div className="bg-img"><img className="bar-bg"src="../static/images/800/HUELLA-IZQUIERDA-(800)-.png"/></div>
        <div className="container margin-fix">
          <div className="row">
            <div className="col s12 m12 l3">
              <p className="about-title">{this.props.t('about-title')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l5">
              <p className="about-text">{this.props.t('about-text-1')}</p>
            </div>
            <div className="col s12 m12 l6">
              <img className="about-img" alt="N" src="../static/images/1000/N(1000)-.png" />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l6">
              <div className="right-align">
                <svg height="150" width="200">
                  <line className="products-line" x1="50" y1="120" x2="200" y2="120" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
            </div>
            <div className="col s12 m12 l2 left-align">
              <p className="products-title ">{this.props.t('about-title-2')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l6">
              <img className="about-img" alt="N" src="../static/images/1000/S(1000)-.png" />
            </div>
            <div className="col s12 m12 l5 valign-wrapper">
              <p className="about-text">{this.props.t('about-text-2')}</p>
              <p className="text-vertical">©2019 NeetSec International</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l1">
              <div className="right-align">
                <svg height="150" width="200">
                  <line className="products-line" x1="0" y1="120" x2="80" y2="120" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
            </div>
            <div className="col s12 m12 l2 left-align">
              <p className="products-title ">{this.props.t('about-title-3')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l5">
              <p className="about-text">{this.props.t('about-text-3')}</p>
            </div>
            <div className="col s12 m12 l6">
              <img className="about-img-2" alt="N" src="../static/images/1000/I(1000)-.png" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('about')(About)
