import ChaiCard from "./components/ChaiCard";

function App() {
  return (
    <>
      <div className="text-amber-300">Hello</div>
      <ChaiCard name="iphone" price={200} isSpecial={true} />
    </>
  );
}

export default App;
