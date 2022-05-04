import "./App.css";
import AppRoutes from "./routes/routes";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <AppRoutes />
    </CacheProvider>

  );
}

export default App;
