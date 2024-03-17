import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>
);
