import React, { Suspense } from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

const HomePageView = React.lazy(() => import('./HomePageView'))
const GalleryPage = React.lazy(() => import('./GalleryPage'))
const CalendarPage = React.lazy(() => import('./CalendarPage'))

function AppView() {
    return (
        <Suspense fallback={<p> loading... </p>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePageView />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppView;