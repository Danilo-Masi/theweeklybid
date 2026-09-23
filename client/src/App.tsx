import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import Archive from './pages/Archive'
import EditionDetail from './pages/EditionDetail'
import HowItWorks from './pages/HowItWorks'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import BidConfirmation from './pages/BidConfirmation'
import NotFound from './pages/NotFound'
import NextEdition from './pages/NextEdition';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="next-edition" element={<NextEdition />} />
          <Route path="bid/confirmation" element={<BidConfirmation />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="archive" element={<Archive />} />
          <Route path="archive/:issueNumber" element={<EditionDetail />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}