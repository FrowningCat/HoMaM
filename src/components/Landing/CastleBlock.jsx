import './landing.css';
import line from '../../assets/line.png';
import angell from '../../assets/angel.png';
import catll from '../../assets/catl.png';
import castl from '../../assets/1.jpg';
import inferno from '../../assets/2.png';
import pri from '../../assets/3.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CastleBlock() {
    const [angel, setAngel] = useState('angel');
    const [catl, setCatl] = useState('catl');

    function scroll() {
        if (window.scrollY < 250) {
            setAngel('angelHidden');
        } else if (window.scrollY > 250) {
            setAngel('angel');
        }

        if (window.scrollY < 350) {
            setCatl('catlHidden');
        } else if (window.scrollY > 350) {
            setCatl('catl');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll);
    });

    return (
        <div className="landing__castleBlock">
            <img src={angell} alt="angel" className={angel} />
            <img src={catll} alt="catl" className={catl} />
            <div className="landing__castleBlock__blokContext">
                <p
                    className="landing__castleBlock__blokContext__title"
                    id="castl"
                >
                    ЗАМКИ
                    <img
                        src={line}
                        alt="line"
                        className="landing__castleBlock__blokContext__line"
                    />
                </p>
                <div className="landing__castleBlock__blokContext__grid">
                    <Link to={'/castle'}>
                        <div className="landing__castleBlock__blokContext__grid__imgBlockC">
                            <img
                                src={castl}
                                alt="Rectangle1"
                                className="landing__castleBlock__blokContext__grid__imgBlockC__img"
                            />
                            <p className="landing__castleBlock__blokContext__grid__imgBlockC__text">
                                Замок
                            </p>
                        </div>
                    </Link>
                    <div className="landing__castleBlock__blokContext__grid__imgBlockI">
                        <img
                            src={inferno}
                            alt="Rectangle1"
                            className="landing__castleBlock__blokContext__grid__imgBlockI__img"
                        />
                        <p className="landing__castleBlock__blokContext__grid__imgBlockI__text">
                            Инферно
                        </p>
                    </div>
                    <div className="landing__castleBlock__blokContext__grid__imgBlockP">
                        <img
                            src={pri}
                            alt="Rectangle1"
                            className="landing__castleBlock__blokContext__grid__imgBlockP__img"
                        />
                        <p className="landing__castleBlock__blokContext__grid__imgBlockP__text">
                            Причал
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
