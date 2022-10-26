import * as React from 'react';
import { Image, ListGroup, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
  faServer,
  faCreditCard,
  faFileAlt,
  faMap,
  faUser,
  faFolderOpen,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
  faUsers,
  faServer,
  faCreditCard,
  faFileAlt,
  faMap,
  faUser,
  faFolderOpen,
  faChalkboardTeacher, 
);

export const Sidenav = ({ toggle }: { toggle?: () => void }) => {
  const classList = 'p-3 list-group-item list-group-item-action';
  const location = useLocation();

  React.useEffect(() => {
    if (toggle && window.innerWidth <= 768) toggle();
  }, [location]);

  return (
    <div
      className="border-right"
      id="sidebar-wrapper"
      style={{ marginTop: '0px' }}
    >
      <Navbar
        variant="light"
        className={'shadow-none mb-5'}
        style={{ height: '60px', background: '#f2f2f2' }}
      >
        <Container>
          <Navbar.Brand
            as={'div'}
            className={'w-100 d-flex justify-content-start'}
          >
            <div>
              <Image
                alt=""
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />{' '}
            </div>
            <div className={'mx-4'}>CRM</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ListGroup variant="flush" as={'div'}>
          <Link
            to="/admin"
            className={`${classList} ${
              location.pathname === '/admin' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faServer} />
            <span className="icon-menu-title"> Dashboard</span>
          </Link>
          <Link
            to="/admin/student"
            className={`${classList}  ${
              location.pathname.startsWith('/admin/student') ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faUsers} />
            <span className="icon-menu-title"> Etudiants</span>
          </Link>
          <Link
            to="/admin/transcription"
            className={`${classList}  ${
              location.pathname === '/admin/transcription' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faFileAlt} />
            <span className="icon-menu-title"> Notes</span>
          </Link>
          <Link
            to="/admin/fee"
            className={`${classList}  ${
              location.pathname === '/admin/fee' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="icon-menu-title"> Cotisation</span>
          </Link>
          <Link
            to="/admin/program"
            className={`${classList}  ${
              location.pathname === '/admin/program' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faMap} />
            <span className="icon-menu-title"> Programmes</span>
          </Link>
          <Link
            to="/admin/account"
            className={`${classList}  ${
              location.pathname === '/admin/account' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="icon-menu-title"> Compte</span>
          </Link>
          <Link
            to="/admin/document"
            className={`${classList}  ${
              location.pathname === '/admin/document' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            <span className="icon-menu-title"> Documents</span>
          </Link>
          <Link
            to="/admin/coach"
            className={`${classList}  ${
              location.pathname === '/admin/coach' ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span className="icon-menu-title"> Coachs</span>
          </Link>
        </ListGroup>
      </Container>
    </div>
  );
};
