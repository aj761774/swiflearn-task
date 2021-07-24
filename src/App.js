import './App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import TitleSubtitle from './components/TitleSubtitle';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div className="container">
      <Header/>
      <TitleSubtitle title="Concept Videos" idName="firstTitle"/>
      <VideoCarousel/>
      <TitleSubtitle title="Live Classes"/>
      <Pagination/>
    </div>
  );
}

export default App;
