import './landing.css';
import MaskGroup from '../../assets/Mask group.png';
import pattern from '../../assets/pattern.png';
import x from '../../assets/x.png';

export default function Header() {
    return (
        <header className="landing__header">
            <div className="landing__header__title">
                <p className="landing__header__title__nameCompany">
                    <text className="landing__header__title__nameCompany__capitalLetter">
                        F
                    </text>
                    rowning <br />
                    <text className="landing__header__title__nameCompany__capitalLetter">
                        C
                    </text>
                    at
                </p>
                <p className="landing__header__title__nameProject">
                    Heroes of Might and Magic III
                </p>
                <button className="landing__header__title__button">
                    ЗАМКИ
                </button>
            </div>
            <img
                src={MaskGroup}
                alt="MaskGroup"
                className="landing__header__MaskGroup"
            />
            <img
                src={pattern}
                alt="MaskGroup"
                className="landing__header__pattern"
            />
            <img src={x} alt="MaskGroup" className="landing__header__x" />
        </header>
    );
}
