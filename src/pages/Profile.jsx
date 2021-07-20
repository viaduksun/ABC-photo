import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProfileBlock from '../components/ProfileBlock/ProfileBlock';

const Profile = () => {
  const array = [['/', 'Главная'], ['profile', 'Личный кабинет']];
  return (
    <>
      <Breadcrumbs data={array} />
      <section className="profile">
        <div className="container">
          <ProfileBlock />
        </div>
      </section>
    </>
  );
};

export default Profile;
