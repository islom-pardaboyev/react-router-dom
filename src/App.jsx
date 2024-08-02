import "./App.css";
import Navbar from "./components/Navbar";
import { CustomContext } from "./context/context";
import CustomRoutes from "./routes";

function App() {
  return (
    <CustomContext>
      <section className="w-screen h-screen overflow-hidden">
      <div className="flex">
        <Navbar />
        <main className="px-[30px] pt-[30px] h-screen overflow-y-auto bg-gray-20 w-full">
          <CustomRoutes />
        </main>
      </div>
    </section>
    </CustomContext>
  );
}

export default App;
