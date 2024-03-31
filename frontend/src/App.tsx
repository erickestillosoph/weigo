import "./App.css";
import { RecoilRoot } from "recoil";
import { Header } from "./components/layouts/headerLayout";
import { BodyLayout } from "./components/layouts/bodyLayout";

function App() {
    return (
        <div style={{ position: "relative" }}>
            <RecoilRoot>
                <Header></Header>
                <BodyLayout></BodyLayout>
            </RecoilRoot>
        </div>
    );
}

export default App;
