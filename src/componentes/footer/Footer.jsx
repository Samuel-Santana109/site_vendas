
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import '../../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer p-4 bg-dark text-white">

      <div className="container text-center">

        <div className="row">

          <div className="col-md-6">
            <h4>Sobre Nós</h4>
            <p>Somos uma empresa de tecnologia dedicada a fornecer soluções inovadoras.</p>
          </div>

          <div className="col-md-6">
            <h4>Contato</h4>
            <address>
              <p><i className="bi bi-geo-alt"></i> Estamos totalmente online, atendendo em todo o Brasil e fora do Brasil.</p>
              <p><i className="bi bi-envelope"></i> E-mail: tech.world7562@gmail.com</p>
              <p><i className="bi bi-telephone"></i> Telefone: (61) 91076831</p>
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
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100090819723599" role="button"><FaFacebookF /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaGoogle /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/tw_techworld/" role="button"><FaInstagram /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/samuelss10/" role="button"><FaLinkedinIn /></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/samuel-Santana109" role="button"><FaGithub /></a>
      </div>

      <hr />
      <div className="text-center p-3">
        © 2023 Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/">Tech World</a>
      </div>
    </footer>
  );
};

export default Footer;
