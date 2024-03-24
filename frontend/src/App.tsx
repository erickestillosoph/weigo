import "./App.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Datepicker from "./common/components/datepicker/Datepicker";
import Navigation from "./common/components/navigationLinks/Navigation";
import { InputWithLabel } from "./common/components/input";

function App() {
  return (
    <>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger />
            <NavigationMenu.Content>
              <NavigationMenu.Link />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link />
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger />
            <NavigationMenu.Content>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
      <Datepicker></Datepicker>
      <Navigation></Navigation>
      <InputWithLabel></InputWithLabel>
    </>
  );
}

export default App;
