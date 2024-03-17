import { fetchUser } from "@entities";

import { Spacing, Text, Textarea } from "@vkontakte/vkui";
import { CustomButton } from "@widgets/button";
import { useEffect, useRef, useState } from "react";

export const AgePage = () => {
  const [name, setName] = useState<string>("");
  const [prevName, setPrevName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const nameRef = useRef("");

  const handleClick = async () => {
    const currentName = nameRef.current;

    if (prevName === currentName) {
      setLoading(false);
      return false;
    }

    setLoading(true);
    const abortController = new AbortController();
    setController(abortController);

    try {
      const userResponse = await fetchUser(currentName, abortController.signal);
      if (!abortController.signal.aborted) {
        setAge(userResponse.age);
        setPrevName(currentName);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newName = e.target.value;
    setName(newName);
    nameRef.current = newName;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (controller) {
      controller.abort();
    }

    const timeout = setTimeout(() => {
      handleClick();
    }, 3000) as ReturnType<typeof setTimeout>;

    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [controller, debounceTimeout]);

  return (
    <div>
      <Spacing size={10} />
      <Textarea
        placeholder="Введите имя"
        defaultValue={name}
        onChange={onChangeName}
      />
      <Spacing size={10} />

      {name &&
        (loading ? (
          <Text>Загрузка...</Text>
        ) : (
          age && <Text>Возраст: {age}</Text>
        ))}

      <Spacing size={10} />
      <CustomButton text="Отправить" onClick={handleClick} disabled={loading} />
    </div>
  );
};
