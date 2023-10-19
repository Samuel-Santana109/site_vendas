import '../../style/footer.scss';

const Footer = () => {
  return (
    <footer className="footer p-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Sobre Nós</h4>
            <p>
              Somos uma empresa de tecnologia dedicada a fornecer soluções inovadoras.
            </p>
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
      <div className="footer-bottom py-2">
        <div className="container text-center">
          <p>&copy; TECH WORLD {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
