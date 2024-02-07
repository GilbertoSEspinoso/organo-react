import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-bg'>
      <div className="container">
        <div className='footer-redes'>
          <a href='./' alt='sdsd'><img src='/imagens/fb.png' alt='face' /></a>
          <a href='./' alt='sdsd'><img src='/imagens/tw.png' alt='face' /></a>
          <a href='./' alt='sdsd'><img src='/imagens/ig.png' alt='face' /></a>
        </div>
        <div className='logo'>
          <img src='/imagens/logo.png' alt='face' />
        </div>
        <p>Organo © 2024 | Desenvolvido por Gilberto Espinoso</p>
      </div>
    </footer>
  )
}

export default Footer