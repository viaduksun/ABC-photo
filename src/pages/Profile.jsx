import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProfileBlock from '../components/ProfileBlock/ProfileBlock';

const Profile = () => (
  <>
    <Breadcrumbs />
    <div className="container">
      <h1>My profile</h1>
      <ProfileBlock />
    </div>
  </>
);

export default Profile;
