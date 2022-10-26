import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Premier League',
      imageUrl: 'https://cdn.staticaly.com/img/2.bp.blogspot.com/-wwKihMONlqI/V8j2VMBCXHI/AAAAAAAAKcs/6alqAxZHL9UTGaKwTNYrQXFWbroiq4DiQCLcB/s280/2016-17-premier-league-sleeve-patch-2.jpg',
    },
      {
      id: 2,
      title: 'La Liga',
      imageUrl: 'https://assets.laliga.com/assets/logos/laliga-v/laliga-v-1200x1200.png',
    },
    {
      id: 3,
      title: 'Serie A',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2021/10/Italian-Serie-A-logo.png',
    },
    {
      id: 4,
      title: 'Bundesliga',
      imageUrl: 'https://www.fifplay.com/img/public/bundesliga-logo.png',
    },
    {
      id: 5,
      title: 'Ligue 1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
