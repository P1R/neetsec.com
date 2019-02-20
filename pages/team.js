
import PropTypes from 'prop-types'

import { i18n, withNamespaces } from '../i18n'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

class Team extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['team', 'navbar'],
    }
  }
  render() {
    return (
      <div className="about-main">
        <style jsx>{`
      .about-main{
        background-image: url("../static/images/800/HUELLA-DERECHA-(800)-.png");
        background-repeat: no-repeat;
        background-position:175% -30%;
        background-size: 72% 100%;
      }      
    `}</style>
        <Navbar />
        <div className="container margin-fix">
          <div className="row">
            <div className="col s12 m12 l4 valign-wrapper">
              <p className="about-title">{this.props.t('title')}</p>
              <svg height="150" width="200">
                  <line className="products-line" x1="0" y1="120" x2="120" y2="120" />
                  Sorry, your browser does not support inline SVG.
              </svg>
            </div>
          </div>
          <div className="row">
            <div className="col 12 m12 l4">
              <img className="team-img" alt="pyro" src="../static/images/p1r0.png" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Ahgala" src="../static/images/ahgala.png" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Fawkes" src="../static/images/fawkes.png" />
            </div>
            

            <div className="col 12 m12 l4">
              <img className="team-img" alt="Alex" src="../static/images/alex.png" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Dx" src="../static/images/dx.jpeg" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Let" src="../static/images/let.png" />
            </div>
          </div>
          <div className="row">
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Jose" src="../static/images/jose.jpg" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Jessica" src="../static/images/img_avatar.png" />
            </div>
            <div className="col 12 m12 l4">
              <img className="team-img" alt="Guty" src="../static/images/img_avatar.png" />
            </div>
          </div>
          
          
        </div>
        <Footer />
      </div>
    )
  }
}


Team.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('team')(Team)
