import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import TopGames from './TopGames';
import MostPlayed from './MostPlayed';
import Categories from './Categories';
import Shop from './Shop';
import Footer from './Footer';
import Header from './Header';
import ShopHeroSection from '../ShopPage/ShopHeroSection';
import MenusGames from '../ShopPage/MenusGames';
import PageNumber from '../ShopPage/PageNumber';
import Portion1 from '../ShopPage/Portion1';
import Portion2 from '../ShopPage/Portion2';
import Portion3 from '../ShopPage/Portion3';
import Portion4 from '../ShopPage/Portion4';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ProductHero from '../ProductPage/ProductHero';
import GameIntro from '../ProductPage/GameIntro';
import Description from '../ProductPage/Description';
import ContactHero from '../ContactPage/ContactHero';
import MapSection from '../ContactPage/MapSection';

function HomePageContainer() {

  const [show, setshow] = useState(false);
  const [ShowAll, setShowAll] = useState('');
  const [BtnColor, setBtnColor] = useState('');
  const [StickyHeader, setStickyHeader] = useState(false);

  const menuHandler = () => setshow(!show);
  const activeMenuHandler = () => setShowAll('Show All');
  const AdventureMenuHandler = () => setShowAll('Adventure');
  const StrategyMenuHandler = () => setShowAll('Strategy');
  const RacingMenuHandler = () => setShowAll('Racing');
  const descHander = () => setBtnColor('Description');
  const reviewHander = () => setBtnColor('Review');


  useEffect(() => {
    const stickyHeader = () => {
      if (window.scrollY > 500) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
    window.addEventListener('scroll', stickyHeader);
    setShowAll('Show All');
    setBtnColor('Description');
  }, []);



  return (
    <div>
      <Router>
        <Header StickyHeader={StickyHeader} show={show} menuHandler={menuHandler}/>
        <Switch>
          <Route exact path='/'>
            <HeroSection />
            <TopGames />
            <MostPlayed />
            <Categories />
            <Shop />
          </Route>
          <Route exact path='/shop'>
            <ShopHeroSection />
            <MenusGames ShowAll={ShowAll} activeMenuHandler={activeMenuHandler} RacingMenuHandler={RacingMenuHandler} StrategyMenuHandler={StrategyMenuHandler} AdventureMenuHandler={AdventureMenuHandler} />
            <div className='container'>
              {ShowAll === 'Show All' && <Portion1 />}
              {ShowAll === 'Adventure' && <Portion2 />}
              {ShowAll === 'Strategy' && <Portion3 />}
              {ShowAll === 'Racing' && <Portion4 />}
            </div>
            <PageNumber />
          </Route>
          <Route exact path='/product'>
            <ProductHero />
            <GameIntro />
            <Description BtnColor={BtnColor} descHander={descHander} reviewHander={reviewHander} />
          </Route>
          <Route exact path='/contact'>
            <ContactHero />
            <MapSection />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default HomePageContainer;