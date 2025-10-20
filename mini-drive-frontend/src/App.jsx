import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import SharedFilesPage from './pages/SharedFilesPage';
import UploadFilesPage from './pages/UploadFilesPage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      {/* temporary links for checking routes */}
      {/* <nav style={{ padding: 12, display: 'flex', gap: 12 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/shared">Shared files</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shared" element={<SharedFilesPage />} />
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/upload" element={<UploadFilesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
