
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

        <Navbar />
        <div className="bg-img right hide-on-med-and-down"><img src="../static/images/1400/HUELLADERECHA.png"/></div>
        <div className="bg-img right hide-on-med-and-down"><img src="../static/images/1400/HUELLADERECHA.png"/></div>
        <div className="bg-img1 hide-on-med-and-down"><img className="bar-bg"src="../static/images/1400/BARRA(1400)-.png"/></div>
        <div className="bg-img about hide-on-med-and-down"><img className="line-bg"src="../static/images/1400/NEON-LINES(1400).png"/></div>
        <div className="bg-img hide-on-med-and-down"><img className="bar-bg"src="../static/images/1000/HUELLA-IZQUIERDA-(1000)-.png"/></div>
        
        <div className="container margin-fix">
          <div className="row">
            <div className="col s12 m12 l3">
              <p className="about-title">{this.props.t('about-title')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 push-l1 l5">
              <p className="about-text">{this.props.t('about-text-1')}</p>
            </div>
            <div className="col s12 m12 l6">
              <img className="about-img" alt="N" src="../static/images/1000/N(1000)-.png" />
            </div>
          </div>
          <div className="row">
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
      </div>
    )
  }
}


About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('about')(About)
