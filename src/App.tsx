import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayouts/PublicLayouts";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView/ProductsView"));
const EachProductView = lazy(
  () => import("./views/EachProductView/EachProductView")
);
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<EachProductView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

// პროექტი რომ იტვირთება ერთ ფაილში იყრება და ერთობრივად ეშვება. lazy-ს დროს რა გვერდზეც ხარ ის გვერდი იტვირთება.
