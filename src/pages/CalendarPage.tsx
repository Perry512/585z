import CalendarComponent from "../components/CalendarComponent"
import Layout from "../components/Layout"
import gal4 from "../assets/photoGal/gal4.jpg"

export default function CalendarPage() {
    return (
        <Layout>
            <div className="min-h-[90vh]">
                <div className='min-h-[70vh] text-3xl bg-[center_top_-10rem]' style={{ backgroundImage: `url(${gal4})`}} >
                    <div className="translate-y-10">
                        <span className="text-7xl font-bold text-black">Upcoming Events</span>
                    </div>
                </div>
                {/* Links to signups */}
                <div className="min-h-[100vh]">
                    <CalendarComponent />
                </div>
            </div>
        </Layout>
    )
}   