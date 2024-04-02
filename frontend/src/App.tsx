import "./App.css";
import { RecoilRoot } from "recoil";
import { Header } from "./components/layouts/headerLayout";
import { BodyLayout } from "./components/layouts/bodyLayout";
import { FooterLayout } from "./components/layouts/footerLayout";

function App() {
    return (
        <div style={{ position: "relative" }}>
            <RecoilRoot>
                <Header></Header>
                <BodyLayout></BodyLayout>
                <FooterLayout className="margin_top_200_clamp"></FooterLayout>
            </RecoilRoot>
        </div>
    );
}

export default App;
