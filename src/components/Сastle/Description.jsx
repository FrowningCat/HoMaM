import './castle.css';

export default function Description() {
    return (
        <div className="castle__description">
            <p className="castle__description__title">
                <h2>Описание</h2>
            </p>
            <div className="castle__description__generalDescription">
                <p className="castle__description__generalDescription__title">
                    Общее описание
                </p>
                <ul className="castle__description__generalDescription__ul">
                    <li className="castle__description__generalDescription__ul__li">
                        Сильные стороны
                        <ul className="castle__description__generalDescription__ul__li__ul">
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </li>
                    <li className="castle__description__generalDescription__ul__li">
                        Слабые стороны
                        <ul className="castle__description__generalDescription__ul__li__ul">
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </li>
                    <li className="castle__description__generalDescription__ul__li">
                        Основные рессурсы
                        <ul className="castle__description__generalDescription__ul__li__ul">
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </li>
                    <li className="castle__description__generalDescription__ul__li">
                        Основные герои
                        <ul className="castle__description__generalDescription__ul__li__ul">
                            <li className="castle__description__generalDescription__ul__li__ul__li">
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
