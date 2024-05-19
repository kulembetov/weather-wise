"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Location } from "@/types";
import { toast } from "react-toastify";

const SearchForm = ({
  onSearch,
}: {
  onSearch: (location: Location) => void;
}) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        toast.error("Location not found. Please try a different location.");
      }
      setLocations(data.results || []);
    } catch (error) {
      toast.error("Location not found. Please try a different location.");
    }
    setLoading(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSelectLocation = (location: Location) => {
    onSearch(location);
    setQuery("");
    setLocations([]);
    toast.success(
      `Location selected: ${location.name}, ${location.admin1}, ${location.country}`
    );
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="flex flex-col justify-center items-center gap-3 w-full max-w-md relative"
        onSubmit={handleSubmit}
      >
        <SearchIcon className="absolute left-2 top-[24%] transform -translate-y-1/2 text-gray-500 z-10" />
        <Input
          type="text"
          placeholder="Search for location"
          className="w-full pl-10 text-center rounded-lg"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <Button type="submit" className="h-full rounded-lg">
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>
      {locations.length > 0 && (
        <ul className="mt-3 w-full border rounded-lg">
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
