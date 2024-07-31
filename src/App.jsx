import "./App.css";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";

function App() {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="flex">
        <Navbar />
        <main className="pl-[30px] w-full">
          <CustomRoutes />
        </main>
      </div>
    </section>
  );
}

export default App;
