import "./App.css";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";

function App() {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="flex">
        <Navbar />
        <main className="px-[30px] pt-[30px]  bg-gray-20 w-full">
          <CustomRoutes />
        </main>
      </div>
    </section>
  );
}

export default App;
