"use client";
import * as React from "react";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";

type ToastProps = {
  title: string;
  description: string;
  variant: "default" | "success" | "error";
};

type ToastContextProps = {
  toast: (props: ToastProps) => void;
};

const ToastContext = React.createContext<ToastContextProps | undefined>(
  undefined
);

const TOAST_DURATION = 3500;

export function ToastProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toast, setToast] = React.useState<ToastProps | null>(null);

  const showToast = (props: ToastProps) => {
    setToast(props);
    setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION);
  };

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      <ToastProvider>
        <ToastViewport />
        {toast && (
          <Toast className="rounded-xl" variant={toast.variant}>
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
          </Toast>
        )}
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
