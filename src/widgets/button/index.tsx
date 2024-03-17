import { Button } from "@vkontakte/vkui";

interface ButtonProps {
  size?: "s" | "m" | "l" | undefined;
  rounded?: boolean | undefined;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: string | undefined;
}

export const CustomButton = ({
  size = "m",
  rounded = true,
  text,
  disabled = false,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <Button
      size={size}
      rounded={rounded}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </Button>
  );
};
