import { HomePage } from "@pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
  usePlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const queryClient = new QueryClient();

export const App = () => {
  const platform = usePlatform();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot>
        <SplitLayout
          header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        >
          <SplitCol autoSpaced>
            <HomePage />
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </QueryClientProvider>
  );
};
