import React, { useState, Suspense } from "react";
// mport LazyComponent from "./lazy-component";

const loadComponent = () => import("./lazy-component");
const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button
          onMouseOver={loadComponent}
          onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC on screen' : 'LC is offscreen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};
