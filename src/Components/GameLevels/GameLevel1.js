import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';

const GameLevel1 = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="icons">
                    <img src={five} alt='One' width={50} height={50} />
                    <img src={four} alt='One' width={50} height={50} />
                    <img src={two} alt='One' width={50} height={50} />
                    <img src={one} alt='One' width={50} height={50} />
                    <img src={three} alt='One' width={50} height={50} />
                </div>
                <div className="numbers">
                    <ul className="style-lists">
                        <li className='list'>2</li>
                        <li className='list'>1</li>
                        <li className='list'>4</li>
                        <li className='list'>3</li>
                        <li className='list'>5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GameLevel1;