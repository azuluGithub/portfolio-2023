import './Footer.style.scss';

const FooterComponent = () => {
 
  const renderFooter = () => {
    return (
      <footer className='Footer'>
        <span className='Footer-Text'>{'ARNOLD ZULU'}</span>
      </footer>
    );
  }

  return renderFooter();
}

export default FooterComponent;