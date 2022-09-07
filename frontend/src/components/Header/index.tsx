import './style.css';
import logo from '../../assets/img/dsmeta-logo.svg';

const Header = () => {
    return (
        <>
            <header className="dsmeta-header">
                <div className="dsmeta-header-logo">
                    <img src={logo} alt="DS Meta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://github.com/gabriel-olv">Gabriel de Oliveira</a></p>
                </div>
            </header>
        </>
    )
}

export default Header;