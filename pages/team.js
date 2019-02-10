
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
      <div>
        <Navbar />
        <div className="banner-static team valign-wrapper">
          <div className="container">
            <span className="title ">{this.props.t('title')}</span>
          </div>
        </div>

        <div className="row container">
          <div className="col s12 m4">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/p1r0.png"></img>
                <span class="card-title">David Pérez Negrón A.K.A p1r0</span>
              </div>
              <div class=" center">
                <p><a href="#">{this.props.t('pyro-employee')}</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/david-perez-b79b29116" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="https://gitlab.com/p1r0" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:david@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>{this.props.t('pyro-description')}</p>
              </div>

            </div>
          </div>

          <div className="col s12 m4">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/ahgala.png"></img>
                <span class="card-title">Alvaro Hernández</span>
              </div>
              <div class=" center">
                <p><a href="#">Desarrollador Web "Full Stack" | Documentador</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/alhega" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="https://gitlab.com/ahgala" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:alvaro@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>Maestro en ingeniería en sistemas de información.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/alex.png"></img>
                <span class="card-title">Alexandre Ederer</span>
              </div>
              <div class=" center">
                <p><a href="#">Scrum master | White paper editor</a></p>
                <a className="linkedin" href="https://www.linkedin.com/in/alexandre-ederer/" target="_blank"><img src="/static/images/linkedin.png" alt="LinkedIn"></img></a>
                <a href="mailto:alex@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>Scrum master (Agile), Marketing Content Manager for Verge Currency, works as a project manager and moonlights as an editor.</p>
              </div>
            </div>
          </div>


          
        </div>

        <div className="row container">
        <div className="col s12 m4">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/fawkes.png"></img>
                <span class="card-title">Fawkes</span>
              </div>
              <div class=" center">
                <p><a href="#">Co-fundador</a></p>
              </div>
              <div class="card-content">
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div class="card">
              <div class="card-medium center">
                <img src="/static/images/let.png"></img>
                <span class="card-title">Osmar Pérez Bautista</span>
              </div>
              <div class=" center">
                <p><a href="#">Web Developer</a></p>
                <a href="https://gitlab.com/osmarpb.97" target="_blank"><img src="/static/images/gitlab.png" alt="GitLab"></img></a>
                <a href="mailto:osmar@neetsec.com" target="_blank"><img className="mail" src="/static/images/mail.png" alt="GitLab"></img></a>
              </div>
              <div class="card-content">
                <p>Diseñador digital, centrado en el diseño UI/UX, Diseño Web e Ilustración con algunos conocimientos de back-end.</p>
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
