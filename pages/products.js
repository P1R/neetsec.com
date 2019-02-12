
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
        <div className="banner-static team valign-wrapper">
          <div className="container">
          <br/><br/>
            <span className="title ">{this.props.t('services-title')}</span>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col s12">
                <ul className="lstps">
                  <li>{this.props.t('products-title-1')}</li>
                  <p>{this.props.t('products-text-1')}</p>
                  <p>{this.props.t('products-sentence-1')}</p>
                  <li>{this.props.t('products-title-2')}</li>
                  <p>{this.props.t('products-text-2')}</p>
                  <li>{this.props.t('products-title-3')}</li>
                  <p>{this.props.t('products-text-3')}</p>
                  <li>{this.props.t('products-title-4')}</li>
                  <p>{this.props.t('products-text-4')}</p>
                  <p>{this.props.t('products-sentence-2')}</p>
                  <li>{this.props.t('products-title-5')}</li>
                  <p>{this.props.t('products-text-5')}</p>
                  <li>{this.props.t('products-title-6')}</li>
                  <p>{this.props.t('products-text-6')}</p>
                  <p>{this.props.t('products-sentence-3')}</p>
                  <li>{this.props.t('products-title-7')}</li>
                  <p>{this.props.t('products-text-7')}</p>
                  <p>{this.props.t('products-text-8')}</p>
                  <p>{this.props.t('products-sentence-4')}</p>
                  <li>{this.props.t('products-title-8')}</li>
                  <p>{this.props.t('products-text-9')}</p>
                  <li>{this.props.t('products-title-9')}</li>
                  <p>{this.props.t('products-text-10')}</p>
                  <li>{this.props.t('products-title-10')}</li>
                  <p>{this.props.t('products-text-11')}</p>
                  <p>{this.props.t('products-sentence-5')}</p>
                  <p>{this.props.t('products-sentence-5-autor')}</p>
                  <li>{this.props.t('products-title-11')}</li>
                  <p>{this.props.t('products-text-12')}</p>
                  <p>{this.props.t('products-text-13')}</p>
                  <li>{this.props.t('products-title-12')}</li>
                  <p>{this.props.t('products-text-14')}</p>
                  </ul>
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
