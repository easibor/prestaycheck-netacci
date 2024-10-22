import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import { ROUTES } from './utils/routes';
import CookieConsent from 'react-cookie-consent';

const App = () => {
  const Home = lazy(() => import('./pages/homepage/Home'));
  const Faq = lazy(() => import('./pages/faq/Faq'));
  const About = lazy(() => import('./pages/about/About'));
  const Terms = lazy(() => import('./pages/terms/Terms'));
  const PrivacyPolicy = lazy(() =>
    import('./pages/privacyPolicy/PrivacyPolicy')
  );
  const Contact = lazy(() => import('./pages/contact/Contact'));
  return (
    <>
      <CookieConsent
        location='bottom'
        buttonText='I understand'
        cookieName='myCookieConsent'
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150} // Days until the cookie expires
        enableDeclineButton
        declineButtonText='Decline'
      >
        This website uses cookies to enhance the user experience.{' '}
        <a href='/privacy-policy' style={{ color: '#ffd700' }}>
          Learn more
        </a>
      </CookieConsent>
      <Routes>
        <Route
          path={ROUTES.home}
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.faq}
          element={
            <Suspense fallback={<Loader />}>
              <Faq />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.about}
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.terms}
          element={
            <Suspense fallback={<Loader />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.privacy}
          element={
            <Suspense fallback={<Loader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.contact}
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
