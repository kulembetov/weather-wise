"use client";

import { useTheme } from "@/contexts/ThemeContext";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
  };

  return (
    <Select value={theme} onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-40">
        <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeToggler;
