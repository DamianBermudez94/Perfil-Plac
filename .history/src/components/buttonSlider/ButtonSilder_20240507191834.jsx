import React from 'react';

class NextArrow extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { className, onClick } = this.props;
    return (
      <div className={className} onClick={onClick}>
        <button>Next</button>
      </div>
    );
  }
}

class PrevArrow extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { className, onClick } = this.props;
    return (
      <div className={className} onClick={onClick}>
        <button>Previous</button>
      </div>
    );
  }
}

export { NextArrow, PrevArrow };
