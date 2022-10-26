import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidenav } from '../components/Sidenav';
import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import '../css/responsive.css';
import { BackDrop } from '../components/BackDrop';

export const Home = () => {
  
  const [showBackDrop, setShowBackDrop] = React.useState<boolean>(false);
  const ref = React.createRef<HTMLDivElement>();

  const toggle = () => {
    if (ref.current && ref.current?.classList.contains('toggled')) {
      setShowBackDrop(false);
      ref.current.classList.remove('toggled');
    } else {
      if (window.innerWidth <= 768) {
        setShowBackDrop(true);
      } else {
        setShowBackDrop(false);
      }
      ref.current?.classList.add('toggled');
    }
  };

  React.useEffect(() => {
    function updateSize() {
      console.log(window.innerWidth);
      if (ref.current && ref.current.classList.contains('toggled')) {
        if (window.innerWidth <= 768) {
          setShowBackDrop(true);
        } else {
          setShowBackDrop(false);
        }
      } else {
        setShowBackDrop(false);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={`d-flex adminWidget`} id="wrapper" ref={ref}>
      <Sidenav toggle={toggle} />
      <div id="page-content-wrapper">
        <div
          id="admin-content"
          style={{
            marginTop: '0px',
            backgroundColor: 'rgba(244,244,244,0.67)',
            minHeight: '100vh',
          }}
        >
          <NavBar toggleSidenav={toggle} />
          <Container fluid>
            <Outlet />
          </Container>
        </div>
      </div>
      <BackDrop visible={showBackDrop} onClick={toggle} />
    </div>
  );
};
