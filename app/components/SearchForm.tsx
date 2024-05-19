"use client";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Location } from "@/types";
import { useToast } from "@/hooks/useToast";

interface SearchFormProps {
  onSearch: (location: Location) => void;
  loading: boolean;
}

const SearchForm = ({ onSearch, loading }: SearchFormProps) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
  const { toast } = useToast();

  const fetchLocations = async (query: string) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`
    );
    const data = await response.json();
    return data.results || [];
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Invalid input",
        description: "Please enter a location to search.",
        variant: "error",
      });
      return;
    }

    try {
      const results = await fetchLocations(query);
      if (results.length === 0) {
        toast({
          title: "Location not found",
          description: "Please try a different location.",
          variant: "error",
        });
      } else {
        setLocations(results);
      }
    } catch {
      toast({
        title: "Location not found",
        description: "Please try a different location.",
        variant: "error",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSelectLocation = (location: Location) => {
    onSearch(location);
    setQuery("");
    setLocations([]);
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="relative flex flex-col items-center gap-3 w-full"
        onSubmit={handleSubmit}
      >
        <SearchIcon className="absolute left-2 top-[24%] transform -translate-y-1/2 text-gray-500 z-10" />
        <Input
          type="text"
          placeholder="Search for location"
          className="w-full pl-10 text-center rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" className="h-full rounded-lg">
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>
      {locations.length > 0 && (
        <ul className="mt-3 w-full border rounded-xl">
          {locations.map((location) => (
            <li
              key={location.id}
              className="p-2 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg"
              onClick={() => handleSelectLocation(location)}
            >
              {location.name}, {location.admin1}, {location.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
