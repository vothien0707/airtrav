import { circle } from 'assets/images';

import '../../../sass/components/header.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card__circle">
        <img src={circle} alt="card-circle" />
      </div>
      <div className="card__title">
        <span>24/7</span>
        <span>Guide Support</span>
      </div>
    </div>
  );
};

export default Card;
