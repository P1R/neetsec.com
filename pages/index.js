import PropTypes from 'prop-types'

import { i18n, withNamespaces } from '../i18n'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

class Homepage extends React.Component {

    static async getInitialProps() {
        return {
            namespacesRequired: ['home', 'navbar'],
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="banner-static valign-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <h1 className="title">{this.props.t('Talk is cheap')}</h1>
                                <span className="title container">Crypto’s not.</span>
                                <p className="sub-title">{this.props.t('home-text-1')}</p>
                            </div>
                            <div className="col s12 m6">
                                <img src="../static/images/logo_nsi.png" className="image" ></img>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col s6">
                                <p className="sub-title ">{this.props.t('home-text-2')}</p>
                            </div>
                            <div className="col s6">
                                <p className="sub-title">{this.props.t('home-text-3')}</p>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="col s12">
                                <p className="sub-title">{this.props.t('home-text-4')}</p>
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

Homepage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withNamespaces('home')(Homepage)
