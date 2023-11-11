
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import '../../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer p-4 bg-dark text-white">

      <div className="container">

        <div className="row">

          <div className="col-md-6">
            <h4>Sobre Nós</h4>
            <p>Somos uma empresa de tecnologia dedicada a fornecer soluções inovadoras.</p>
          </div>

          <div className="col-md-6">
            <h4>Contato</h4>
            <address>
              <p><i className="bi bi-geo-alt"></i> Endereço: 123 Rua Exemplo, Cidade</p>
              <p><i className="bi bi-envelope"></i> E-mail: exemplo@email.com</p>
              <p><i className="bi bi-telephone"></i> Telefone: (123) 456-7890</p>
            </address>
          </div>

        </div> 

      </div>

      <hr />

      <div className="footer-bottom p-2">
        <div className="container text-center">
          <p>&copy; TECH WORLD {new Date().getFullYear()}</p>
        </div>
      </div>
  
      <div className='d-flex justify-content-center'>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaFacebookF /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaTwitter /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaGoogle /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaInstagram /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaLinkedinIn /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaGithub /></a>
      </div>

      <hr />
      <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
