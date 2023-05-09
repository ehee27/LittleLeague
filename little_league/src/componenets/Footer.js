import React from 'react';

const Footer = () => {
  const date = new Date();
  return <footer className="Footer">Copyright {date.getFullYear()}</footer>;
};

export default Footer;
