import './landing.css';
import line from '../../assets/line.png';
import angell from '../../assets/angel.png';
import catll from '../../assets/catl.png';
import Rectangle1 from '../../assets/Rectangle 1.png';
import { useState, useEffect } from 'react';

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
