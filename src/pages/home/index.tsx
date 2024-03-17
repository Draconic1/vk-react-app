import { AgePage } from "@features/age-form";
import { FactPage } from "@features/fact-form";
import {
  CellButton,
  Group,
  Panel,
  PanelHeader,
  Spacing,
  View,
} from "@vkontakte/vkui";
import { useState } from "react";

export const HomePage = () => {
  const [activePanel, setActivePanel] = useState("fact");
  return (
    <View activePanel={activePanel}>
      <Panel id="fact">
        <PanelHeader>Факт</PanelHeader>
        <Group>
          <FactPage />
          <Spacing />
          <CellButton onClick={() => setActivePanel("age")}>
            На страницу получения возраста
          </CellButton>
        </Group>
      </Panel>
      <Panel id="age">
        <PanelHeader>Возраст</PanelHeader>
        <Group>
          <AgePage />
          <Spacing />
          <CellButton onClick={() => setActivePanel("fact")}>
            На страницу получения факта
          </CellButton>
        </Group>
      </Panel>
    </View>
  );
};
