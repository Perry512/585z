import React, { Suspense } from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
} from 'react-router-dom';

const HomePageView = React.lazy(() => import('./HomePageView'))
const TestPage = React.lazy(() => import('./TestPage'))
const GalleryPage = React.lazy(() => import('./GalleryPage'))

function AppView() {
    return (
        <Suspense fallback={<p> loading... </p>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePageView />} />
                <Route path="/calendar" element={<TestPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Suspense>
    )
}

export default AppView;