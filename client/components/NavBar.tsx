import * as React from 'react';
import { Navbar, Container, Button, Dropdown, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

library.add(faBars, faBell);

function NavBar({ toggleSidenav }: { toggleSidenav?: () => void }) {
  const location = useLocation();
  const authData = useAppSelector((state) => state.auth);
  const [title, setTitle] = React.useState<string>('Dashboard');

  React.useEffect(() => {
    const path = location.pathname.replace('/admin', '');
    switch (path) {
      case '/student':
        setTitle('Student');
        break;
      default:
        setTitle('Dashboard');
    }
  }, [location]);

  return (
    <Navbar
      id={'customNavBar'}
      bg="primary"
      variant="light"
      sticky={'top'}
      className={'shadow-none p-2 mb-4 bg-white'}
      style={{ height: '60px' }}
    >
      <Button id="menu-toggle" onClick={toggleSidenav} variant="link">
        <FontAwesomeIcon
          icon={'bars'}
          className={'text-theme-color font-weight-bold'}
        />
      </Button>
      <Container fluid>
        <Navbar.Brand>{title.toUpperCase()}</Navbar.Brand>
      </Container>
      <FontAwesomeIcon icon={faBell} size={'lg'} />
      <Dropdown align="end">
        <Dropdown.Toggle
          as="div"
          className="btn"
          style={{ textDecoration: 'none' }}
        >
          <div className={'d-flex '}>
            <Col className={'mx-2 mt-1'}>
              <span className="align-middle">
                {'Tsiresy'} {'Mila'}
              </span>
            </Col>
            <Col>
              <LazyLoadImage
                wrapperProps={{ style: { width: 35, height: 35 } }}
                effect="blur"
                src={'/static/uploads/' + ''}
                width="35"
                height="35"
                style={{ objectFit: 'contain' }}
                className="rounded-circle"
                alt="P"
              />
            </Col>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="p-0 border dropdown-menu-md-right"
          style={{
            borderRadius: 0,
            position: 'absolute',
            float: 'right',
            left: 'auto',
            right: '0.1em',
            minWidth: '200px',
          }}
        >
          <div className="row justify-content-center m-2">
            <LazyLoadImage
              wrapperProps={{ style: { width: 120, height: 100 } }}
              effect="blur"
              src={'/static/uploads/' + ''}
              width="100"
              height="100"
              style={{ objectFit: 'contain' }}
              className="rounded-circle"
              alt="P"
            />
          </div>
          <div className="row justify-content-center m-2">
            <div className="text-center" style={{ fontSize: '12px' }}></div>
          </div>
          <div className="bg-pink m-0 text-center ">
            <Link
              className="btn bg-danger btn-block text-center text-white w-100"
              style={{ fontSize: '13px' }}
              to={'/logout'}
            >
              <i
                className="fa fa-arrow-left text-teal mr-2"
                aria-hidden="true"
              />{' '}
              Deconnecter
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}
export default NavBar;
