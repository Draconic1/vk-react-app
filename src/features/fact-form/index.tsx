import { fetchFact } from "@entities";
import { Spacing, Textarea } from "@vkontakte/vkui";
import { CustomButton } from "@widgets/button";
import { useState, useRef } from "react";

export const FactPage = () => {
  const [quote, setQuote] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClick = async () => {
    try {
      const factResponse = await fetchFact();
      const fact = factResponse.fact;
      setQuote(fact);

      if (textareaRef.current) {
        textareaRef.current.value = fact;
        const startPos = fact.indexOf(" ");
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(startPos, startPos);
      }
    } catch (error) {
      console.error("Failed to fetch fact:", error);
    }
  };

  return (
    <div>
      <Spacing size={10} />
      <Textarea
        getRef={textareaRef}
        placeholder="Рандомный факт"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      />
      <Spacing size={20} />
      <CustomButton text="Получить" onClick={onClick} />
    </div>
  );
};
