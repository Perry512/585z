import React, { Suspense } from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop.tsx"

const HomePageView = React.lazy(() => import('./HomePageView'))
const GalleryPage = React.lazy(() => import('./GalleryPage'))
const CalendarPage = React.lazy(() => import('./CalendarPage'))
const AboutUsPage = React.lazy(() => import('./AboutUsPage'))

function AppView() {
    return (
        <Suspense fallback={<p> loading... </p>}>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePageView />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/aboutUs" element={<AboutUsPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppView;