import React, { Suspense } from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop.tsx"

const HomePageView = React.lazy(() => import('../views/HomePageView'))
const GalleryPage = React.lazy(() => import('../pages/GalleryPage.tsx'))
const CalendarPage = React.lazy(() => import('../pages/CalendarPage.tsx'))
const AboutUsPage = React.lazy(() => import('../pages/AboutUsPage.tsx'))

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