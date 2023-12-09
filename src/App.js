import "./App.css";
import FeedBackForm from "./FeedBackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedBackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
