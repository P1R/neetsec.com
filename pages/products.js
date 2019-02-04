
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
      <div>
        <Navbar />
        <div className="banner-static pages valign-wrapper">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <span className="title container">Products and Services</span>
                <ul class="lstps">
                  <li>ICO (marketing, UX-UI, ERC20, HOLO, secure Architectures)</li>
                  <li>Blockchain</li>
                  <li>Secure phones (linked with nethunters team)</li>
                  <li>Cybersecurity consultant (linked with nethunters team)</li>
                  <li>Crypto Mining</li>
                  <li>Others</li></ul>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">

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
