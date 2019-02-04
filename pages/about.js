
import PropTypes from 'prop-types'

import { i18n, withNamespaces } from '../i18n'

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
        <div className="banner-static pages valign-wrapper">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <span className="title container">About NeetSec International</span>
                <p className="sub-title padding">NeetSec es una empresa especializada en ciberseguridad que busca acercar métodos profundos de blindaje para garantizar la seguridad de los datos de nuestros clientes. Basados en el respeto a la libertad de internet, estamos enfocados en dotar de herramientas de seguridad para evitar fugas de información y vulnerabilidades en los datos de las empresas.

Nuestra misión es la de generar un blindaje adecuado y profundo para lograr que las comunicaciones de nuestros clientes se realicen de manera segura y estamos en constante actualización para adaptarnos a las nuevas tecnologías.

Nuestra intención es proveer de herramientos para comunicación que protejan y privilegien la privacidad de los usuarios, amparados en los avances y servicios de la Free Software Fundation (FSF) y la Electronic Frontier Fundation (EFF), Guardian Project y Whisper Solutions.</p>
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


About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('about')(About)
