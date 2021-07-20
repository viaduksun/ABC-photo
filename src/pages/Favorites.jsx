import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import FavoriteContainer from '../containers/FavoriteContainer/FavoriteContainer';

const Favorites = () => {
    console.log('favorites');
    const array = [['/', 'Главная'], ['favorites', 'Избранное']];
    return (
      <>
        <Breadcrumbs data={array} />
        <FavoriteContainer />
      </>
    );
};

export default Favorites;