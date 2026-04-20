import { Suspense } from "react";
import UserGallery from "./UserGallery";

function App() {
  return (
    <>
      <h1>Week 5 - User Gallery</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <UserGallery />
      </Suspense>
    </>
  );
}

export default App;