import { useNavigate } from "react-router-dom";
import { Button } from "./button";
function Link({
  to,
  variant,
  size,
  className,
  children,
}: Readonly<{
  to: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  size?: "default" | "sm" | "lg" | "icon" | null;
  className?: string;
  children: React.ReactNode;
}>) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(to)}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
}
export { Link };
