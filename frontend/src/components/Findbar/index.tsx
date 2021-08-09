import './styles.css';

const Findbar = () => {
    return (
        <div className="find-container border-radius-10">
            <input type="search" placeholder="Digite sua busca"/>
            <button>BUSCAR</button>
        </div>
    );
}

export default Findbar;