import Layout from "../components/Layout";
import AboutUsStatements from "../views/AboutUsStatements";
import MeetV2 from "./MeetV2";

export default function AboutUsPage (){
    return (
        <>
            <Layout>
                <AboutUsStatements />
                <MeetV2 />
            </Layout>
        </>
    )
}