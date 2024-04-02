import './castle.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="castle__header">
            <div className="castle__header__blockText">
                <p className="castle__header__blockText__nameCompany">
                    <text className="castle__header__blockText__nameCompany__capitalLetter">
                        F
                    </text>
                    rowning <br />
                    <text className="castle__header__blockText__nameCompany__capitalLetter">
                        C
                    </text>
                    at
                </p>
                <Link to={'/'}>
                    <div className="castle__header__blockText__button">
                        <p className="castle__header__blockText__button__text">
                            Главная
                        </p>
                    </div>
                </Link>
            </div>
        </header>
    );
}
