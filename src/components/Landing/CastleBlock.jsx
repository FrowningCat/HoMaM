import './landing.css';
import line from '../../assets/line.png';
import Rectangle1 from '../../assets/Rectangle 1.png';

export default function CastleBlock() {
    return (
        <div className="landing__castleBlock">
            <div className="landing__castleBlock__blokContext">
                <p className="landing__castleBlock__blokContext__title">
                    ЗАМКИ
                    <img
                        src={line}
                        alt="line"
                        className="landing__castleBlock__blokContext__line"
                    />
                </p>
                <div className="landing__castleBlock__blokContext__grid">
                    <div className="landing__castleBlock__blokContext__grid__imgBlock">
                        <img
                            src={Rectangle1}
                            alt="Rectangle1"
                            className="landing__castleBlock__blokContext__grid__imgBlock__img"
                        />
                        <p className="landing__castleBlock__blokContext__grid__imgBlock__text">
                            Замок
                        </p>
                    </div>
                    <div className="landing__castleBlock__blokContext__grid__imgBlock">
                        <img
                            src={Rectangle1}
                            alt="Rectangle1"
                            className="landing__castleBlock__blokContext__grid__imgBlock__img"
                        />
                        <p className="landing__castleBlock__blokContext__grid__imgBlock__text">
                            Замок
                        </p>
                    </div>
                    <div className="landing__castleBlock__blokContext__grid__imgBlock">
                        <img
                            src={Rectangle1}
                            alt="Rectangle1"
                            className="landing__castleBlock__blokContext__grid__imgBlock__img"
                        />
                        <p className="landing__castleBlock__blokContext__grid__imgBlock__text">
                            Замок
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
