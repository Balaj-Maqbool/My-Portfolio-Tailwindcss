import { useToast } from "../../hooks/use-toast.js";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../../components/ui/toast.jsx";

export function Toaster() {
  const { toasts } = useToast(); // Get current toasts from custom hook

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          // Render each toast with its props and unique key
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {/* Show title if provided */}
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* Show description if provided */}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {/* Optional action button inside toast */}
            {action}
            {/* Close button for the toast */}
            <ToastClose />
          </Toast>
        );
      })}
      {/* Container for positioning toasts on screen */}
      <ToastViewport />
    </ToastProvider>
  );
}
