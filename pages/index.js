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
            <div className="index-main">
                <Navbar />
                <div className="bg-img hide-on-med-and-down"><img className="line-bg"src="../static/images/1400/NEON-LINES(1400).png"/></div>


                <div className="container margin-fix">
                    <div className="row">
                       
                        <div className="col s12 m12 l4 valign-wrapper">
                            <svg height="150" width="80">
                                <line className="products-line" x1="0" y1="120" x2="80" y2="120" />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                            <p className="about-title">{this.props.t('home-title-1')}</p>
                        </div>
                        <div className="col push-l3 s12 m12 l12">
                            <img src="../static/images/1400/world2 (1400).png" className="index-img" ></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l8">
                            <p className="index-text">{this.props.t('home-text-4')}</p>
                        </div>
                    </div>


                        <div className="row">
                            <div className="col s12 m12 l5">
                                <img src="../static/images/1400/logo-.png" className="index-img1" ></img>
                                
                            </div> 
                            <div className="col s12 m12 l6">
                                <p className="index-text-2">{this.props.t('home-text-1')}</p>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col s12 m12 l4 valign-wrapper">
                                <svg height="150" width="80">
                                    <line className="products-line" x1="0" y1="120" x2="80" y2="120" />
                                    Sorry, your browser does not support inline SVG.
                                </svg>
                                <p className="about-title">{this.props.t('home-title-2')}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l7">
                                <p className="index-text-3">{this.props.t('home-text-2')}</p>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col s12 m12 l8">&nbsp;</div>
                            <div className="col s12 m12 l4 valign-wrapper">
                                <p className="about-title">{this.props.t('home-title-3')}</p>
                                <svg height="150" width="40">
                                    <line className="products-line" x1="0" y1="124" x2="80" y2="124" />
                                    Sorry, your browser does not support inline SVG.
                                </svg>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l5">&nbsp;</div>
                            <div className="col s12 m12 l7 ">
                                <p className="index-text-4">{this.props.t('home-text-3')}</p>
                            </div>
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
