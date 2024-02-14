import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Domainone from "./pages/Domainone";
import Domaintwo from "./pages/Domaintwo";
import Domainthree from "./pages/Domainthree";
import Domainfour from "./pages/Domainfour";
import Domainfive from "./pages/Domainfive";
import Domainsix from "./pages/Domainsix";
import Domainseven from "./pages/Domainseven";
import Domaineight from "./pages/Domaineight";


import Home from  "./pages/Home";



function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/Domain-1-review" element={<Domainone />} />
      <Route path="/Domain-2-review" element={<Domaintwo />} />
      <Route path="/Domain-3-review" element={<Domainthree />} />
      <Route path="/Domain-4-review" element={<Domainfour />} />
      <Route path="/Domain-5-review" element={<Domainfive />} />
      <Route path="/Domain-6-review" element={<Domainsix />} />
      <Route path="/Domain-7-review" element={<Domainseven />} />
      <Route path="/Domain-8-review" element={<Domaineight />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
