import PropTypes from 'prop-types'

import { i18n, withNamespaces } from '../i18n'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

class Products extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['products', 'navbar'],
    }
  }
  render() {
    return (
      <div className="products-main">
        <style jsx>{`
      .products-main{
        background-image: url("../static/images/800/HUELLA-DERECHA-(800)-.png");
        background-repeat: no-repeat;
        background-position:right top;
        background-size: 42% 23%;
      }      
    `}</style>
        <Navbar /> 
        <div className="bg-img"><img className="line-bg"src="../static/images/1400/NEON-LINES(1400).png"/></div>
        <div className="bg-img"><img className="bar-bg"src="../static/images/1000/HUELLA-IZQUIERDA-(1000)-.png"/></div>
        <div className="bg-img1"><img className="bar-bg"src="../static/images/1400/BARRA(1400)-.png"/></div>
        <div className="bg-img1"><img className="bar-bg"src="../static/images/1400/HUELLADERECHA.png"/></div>
          <div className="container margin-fix">
            <div className="row">
              <div className="col s12 m12 l3">
                <div className="valign-wrapper">
                  <svg height="110" width="200">
                    <line className="products-line" x1="-100" y1="100" x2="100" y2="100" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-title ">{this.props.t('services-title')}</p>
                </div>
              </div>
              <div className="col s12 m12 l8 valign-wrapper">
                <img className="products-img" alt="computer" src="../static/images/1000/Computer-(1000).png" />
                
                <p className="text-vertical">©2019 NeetSec International</p>
              </div>
            </div>


            <div className="row">
              <div className="col s12 m12 l5"> 
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">&nbsp;&nbsp;{this.props.t('products-title-1')}</p>
                </div>
                <p className="products-text">{this.props.t('products-text-1')}</p>
                <p className="products-text-sentences margin-text ">{this.props.t('products-sentence-1')}</p>
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-3')}</p>
                </div>
                <p className="products-text margin-text">{this.props.t('products-text-3')}</p>
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-5')}</p>
                </div>
                <p className="products-text margin-text">{this.props.t('products-text-5')}</p>
              </div>
              
              
              
              
              <div className="col s12 m12 l2">
                <svg height="1200" width="300" >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" className="linear-grad-1" />
                      <stop offset="100%" className="linear-grad-2" />
                    </linearGradient>
                  </defs>
                  <line x1="23" y1="44" x2="25" y2="520" className="products-line-2" />
                  <line x1="23" y1="44" x2="160" y2="170" className="products-line-2" />
                  <line x1="23" y1="520" x2="160" y2="170" className="products-line-2" />
                  <line x1="23" y1="520" x2="160" y2="515" className="products-line-2" />
                  <line x1="23" y1="800" x2="160" y2="515" className="products-line-2" />
                  <circle cx="23" cy="60" r="20" className="products-circle" />
                  <circle cx="153" cy="170" r="20" className="products-circle" />
                  <circle cx="23" cy="520" r="20" className="products-circle" />
                  <circle cx="153" cy="520" r="20" className="products-circle" />
                  <circle cx="23" cy="800" r="20" className="products-circle" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className="col s12 m12 l5 pad-dif">
                <div className="valign-wrapper products-title-line right-align">
                  <p className="products-text-title">&nbsp;&nbsp;{this.props.t('products-title-2')}</p>
                  <svg height="110" width="110">
                    <line className="products-line" x1="10" y1="50" x2="65" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <p className="products-text margin-text">{this.props.t('products-text-2')}</p>
                <div className="valign-wrapper products-title-line right-align">
                  <p className="products-text-title">{this.props.t('products-title-4')}</p>
                  <svg height="110" width="110">
                    <line className="products-line" x1="10" y1="50" x2="65" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <p className="products-text">{this.props.t('products-text-4')}</p>
                <p className="products-text-sentences margin-text">{this.props.t('products-sentence-2')}</p>
              </div>
            </div>



            <div className="row products-section-2">
              <div className="col s12 m12 l5">
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-6')}</p>
                </div>
                <p className="products-text">{this.props.t('products-text-6')}</p>
                <p className="products-text-sentences margin-text">{this.props.t('products-sentence-3')}</p>
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-8')}</p>
                </div>
                <p className="products-text">{this.props.t('products-text-9')}</p>
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-9')}</p>
                </div>
                <p className="products-text">{this.props.t('products-text-10')}</p>
                <div className="valign-wrapper products-title-line">
                  <svg height="110" width="110">
                    <line className="products-line" x1="45" y1="50" x2="100" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                  <p className="products-text-title">{this.props.t('products-title-11')}</p>
                </div>
                <p className="products-text">{this.props.t('products-text-12')}</p>
                <p className="products-text">{this.props.t('products-text-13')}</p>
              </div>
              <div className="col s12 m12 l2">
                <svg height="1600" width="300">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" className="linear-grad-1" />
                      <stop offset="100%" className="linear-grad-2" />
                    </linearGradient>
                  </defs>
                  <line x1="23" y1="44" x2="25" y2="360" className="products-line-2" />
                  <line x1="23" y1="44" x2="160" y2="246" className="products-line-2" />
                  <line x1="23" y1="670" x2="160" y2="246" className="products-line-2" />
                  <line x1="23" y1="670" x2="160" y2="825" className="products-line-2" />
                  <line x1="23" y1="1035" x2="160" y2="825" className="products-line-2" />
                  <line x1="23" y1="1035" x2="160" y2="1364" className="products-line-2" />
                  <circle cx="23" cy="60" r="20" className="products-circle" />
                  <circle cx="153" cy="246" r="20" className="products-circle" />
                  <circle cx="23" cy="370" r="20" className="products-circle" />
                  <circle cx="23" cy="670" r="20" className="products-circle" />
                  <circle cx="23" cy="1035" r="20" className="products-circle" />
                  <circle cx="153" cy="825" r="20" className="products-circle" />
                  <circle cx="153" cy="1364" r="20" className="products-circle" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className="col s12 m12 l5">
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <div className="valign-wrapper products-title-line right-align">
                  <p className="products-text-title">{this.props.t('products-title-7')}</p>
                  <svg height="110" width="110">
                    <line className="products-line" x1="10" y1="50" x2="40" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <p className="products-text">{this.props.t('products-text-7')}</p>
                <p className="products-text">{this.props.t('products-text-8')}</p>
                <p className="products-text-sentences margin-text">{this.props.t('products-sentence-4')}</p>
                <div className="valign-wrapper products-title-line right-align">
                  <p className="products-text-title">&nbsp;&nbsp;&nbsp;&nbsp;{this.props.t('products-title-10')}</p>
                  <svg height="110" width="110">
                    <line className="products-line" x1="10" y1="50" x2="65" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <p className="products-text">{this.props.t('products-text-11')}</p>
                <p className="products-text-sentences margin-text">{this.props.t('products-sentence-5')}</p>
                <p className="products-text-sentences margin-text-autor">{this.props.t('products-sentence-5-autor')}</p>
                <div className="valign-wrapper products-title-line right-align">
                  <p className="products-text-title">{this.props.t('products-title-12')}</p>
                  <svg height="110" width="110">
                    <line className="products-line" x1="10" y1="50" x2="60" y2="50" />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </div>
                <p className="products-text">{this.props.t('products-text-14')}</p>
              </div>
            </div>         
          </div>
        <Footer />
      </div>
    )
  }
}


Products.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('products')(Products)



