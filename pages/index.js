import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Index = () => (
    <div>
        <Navbar />
        <div className="banner-static valign-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <h1 className="title">Talk is cheap.
                        </h1><span className="title container">Crypto’s not.</span>
                        <p className="sub-title">NeetSec-The smartest way to launch your ICO!</p>
                    </div>
                    <div className="col s6">
                        <img src="../static/images/logo_nsi.png"></img>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Index