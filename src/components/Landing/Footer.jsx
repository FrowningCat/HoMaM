import './landing.css';
import Line from '../../assets/Line 5.png';
import Rectangle from '../../assets/Rectangle.png';
import Vector1 from '../../assets/Vector 1.png';
import Vector2 from '../../assets/Vector 2.png';
import Vector3 from '../../assets/Vector.png';

export default function Footer() {
    return (
        <div className="landing__footer">
            <div className="landing__footer__blokContext">
                <div className="landing__footer__blokContext__title">
                    <img
                        src={Line}
                        alt="Line"
                        className="landing__footer__blokContext__title__line"
                    />
                    <p className="landing__footer__blokContext__title__title">
                        Контакты
                    </p>
                    <img
                        src={Line}
                        alt="Line"
                        className="landing__footer__blokContext__title__line"
                    />
                </div>
                <div className="landing__footer__blokContext__socialMedia">
                    <img
                        src={Vector1}
                        alt="Vector1"
                        className="landing__footer__blokContext__socialMedia__img"
                    />
                    <img
                        src={Vector2}
                        alt="Vector2"
                        className="landing__footer__blokContext__socialMedia__img"
                    />
                    <img
                        src={Vector3}
                        alt="Vector3"
                        className="landing__footer__blokContext__socialMedia__img"
                    />
                </div>
            </div>
            <img
                src={Rectangle}
                alt="Rectangle"
                className="landing__footer__bg"
            />
        </div>
    );
}
