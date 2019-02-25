
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
          <div className="row ">
          <div className="col s12 m3">
            <div className="card">
              <div className="card-medium center">
                <img src="/static/images/p1r0.png"></img>
                <span className="card-title">David Pérez Negrón A.K.A p1r0</span>
              </div>
              <div className=" center">
                <p><a href="#">{this.props.t('pyro-employee')}</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/david-perez-b79b29116" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="https://gitlab.com/p1r0" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:david@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div className="card-content">
                <p>{this.props.t('pyro-description')}</p>
              </div>

            </div>
          </div>

          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/ahgala.png"></img>
                <span class="card-title">Alvaro Hernández</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('alvaro-employee')}</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/alhega" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="https://gitlab.com/ahgala" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:alvaro@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>{this.props.t('alvaro-description')}</p>
              </div>
            </div>
          </div>

          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/alex.png"></img>
                <span class="card-title">Alexandre Ederer</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('alex-employee')}</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/alexandre-ederer/" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="mailto:alex@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>{this.props.t('alex-description')}</p>
              </div>
            </div>
          </div>
          
          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/fawkes.png"></img>
                <span class="card-title">Fawkes</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('fawkes-employee')}</a></p>
              </div>
              <div class="card-content">
              </div>
            </div>
          </div>


          
        </div>

        <div className="row ">


          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/let.png"></img>
                <span class="card-title">Osmar Pérez Bautista</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('let-employee')}</a></p>
                <a href="https://gitlab.com/osmarpb.97" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:osmar@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>{this.props.t('let-description')}</p>
              </div>
            </div>
          </div>

          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/dx.jpeg"></img>
                <span class="card-title">Luis Alberto Saavedra Nieto</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('jose-employee')}</a></p>
                <a href="mailto:alberto@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>Redactor with social media habilities and advertising campaigns. Focused on enterprise writing, documents redaction and edition</p>
              </div>
            </div>
          </div>

          <div className="col s12 m3">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/jose.jpg"></img>
                <span class="card-title">José Armando Rivera Ramírez</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('jose-employee')}</a></p>
                <a href="https://gitlab.com/josearmando1470" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:jose@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>{this.props.t('jose-description')}</p>
              </div>
            </div>
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
