import React, { Suspense, lazy, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load alle zware pagina's
const MotorLessons = lazy(() => import('./pages/MotorLessons'));
const AutoLessons = lazy(() => import('./pages/AutoLessons'));
const Contact = lazy(() => import('./pages/Contact'));
const SignupForm = lazy(() => import('./pages/SignupForm'));
const Legal = lazy(() => import('./pages/Legal'));

// Ultra-fast loading fallback
const LoadingFallback = () => (
  <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-gray-600 font-medium text-sm">Laden...</p>
    </div>
  </div>
);

// Main layout wrapper - blijft PERSISTENT
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Get current page from URL
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/': return 'home';
      case '/motor-lessons': return 'motor-lessons';
      case '/auto-lessons': return 'auto-lessons';
      case '/contact': return 'contact';
      case '/signup': return 'signup';
      case '/legal': return 'legal';
      default: return 'home';
    }
  };

  const currentPage = useMemo(() => getCurrentPage(), [location.pathname]);

  return (
    <>
      <Header currentPage={currentPage} />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Home - direct, geen lazy load (landing page moet instant zijn) */}
          <Route path="/" element={<Home />} />

          {/* Lazy loaded routes met Suspense */}
          <Route 
            path="/motor-lessons" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <MotorLessons />
              </Suspense>
            } 
          />
          
          <Route 
            path="/auto-lessons" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <AutoLessons />
              </Suspense>
            } 
          />
          
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Contact />
              </Suspense>
            } 
          />
          
          <Route 
            path="/signup" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <SignupForm />
              </Suspense>
            } 
          />
          
          <Route 
            path="/legal" 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Legal />
              </Suspense>
            } 
          />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;