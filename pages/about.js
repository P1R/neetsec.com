
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
      <div>
        <Navbar />
        <div className="banner-static team valign-wrapper">
          <div className="container">
            <span className="title ">{this.props.t('title')}</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <span className="title container">About NeetSec International</span>
              <p className="sub-title padding">{this.props.t('about-text-1')}</p>
              <p className="sub-title padding">{this.props.t('about-text-2')}</p>
              <p className="sub-title padding">{this.props.t('about-text-3')}</p>
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
