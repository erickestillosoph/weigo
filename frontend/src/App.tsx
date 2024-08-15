import "./App.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/layouts/headerLayout";
import { FooterLayout } from "./components/layouts/footerLayout";
import { BodyLayout } from "./components/layouts/bodyLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function App() {
    return (
        <div style={{ position: "relative" }}>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <Header></Header>
                    <BodyLayout></BodyLayout>
                    <FooterLayout className="margin_top_200_clamp"></FooterLayout>
                </RecoilRoot>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    );
}

export default App;
