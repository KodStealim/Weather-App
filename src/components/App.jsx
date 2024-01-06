import SearchInput from "./SearchInput";
import WeatherContent from "./WeatherContent";

const App = () => {



  return (
    <div className="container">
      <div className="weather-card">
        <SearchInput />
        <WeatherContent />
      </div>
    </div>
  );
}

export default App;
