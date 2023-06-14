import '../../../sass/components/header.scss';

const Content = () => {
  return (
    <div className="content">
      <div className="left">
        <h2 className="heading"></h2>
        <p className="text"></p>
        <form className="search">
          <input placeholder="Plan a Trip" />
          <button></button>
        </form>
        <div className="review">
          <span>Our customers say</span>
          <div className="rating">
            <div className="rating__left">
              <span>Excellent</span>
            </div>
            <div className="rating__right">
              <span>4.7</span>
              <span>out of 5 on 194 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Content;
