import logo from './logo.svg';
import './App.css';
import Carte from './Carte';
import produit from './Produit';

function App() {
    const firstName = "Hiba";
    return (
        <div className="App">
            <Carte></Carte>
            <div style={{ marginTop: "20px" }}>
                <p>Hello, {firstName ? firstName : "there"}!</p>
                {/* {firstName && <img src={produit.image} alt="Product" />} */}
            </div>
        </div>
    );
}

export default App;
