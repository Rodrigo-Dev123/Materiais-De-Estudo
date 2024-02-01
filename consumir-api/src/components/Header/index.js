import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import UserProfile from '../UserProfile/index';
import * as actions from '../../store/modules/auth/actions';
import history from '../../Services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const IsLoggedin = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>

      {IsLoggedin ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {IsLoggedin && <FaCircle size={24} color="#00ff00" />}
      <UserProfile />
    </Nav>
  );
}
