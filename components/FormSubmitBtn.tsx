"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface FormSubmitProps {
  fullWidth: boolean;
  children: React.ReactNode;
}
const FormSubmit: React.FC<FormSubmitProps> = ({ children, fullWidth }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="destructive"
      className={`${fullWidth && "w-full"}`}
      type="submit"
    >
      {" "}
      {pending && <Loader2 size={16} className="animate-spin" />}
      {children}{" "}
    </Button>
  );
};

export default FormSubmit;
