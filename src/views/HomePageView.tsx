import Home from "../pages/Home";
import ContactFormPage from "../pages/ContactFormPage";
import Who from "../pages/Who";
import DiscordWidget from "../components/DiscordWidget";

const HomePageView = () => {
    return (
        <>
            <Home />
            <Who />
            <DiscordWidget />
            <ContactFormPage />
        </>
    )
}

export default HomePageView