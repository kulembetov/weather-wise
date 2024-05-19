import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchForm = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-3 w-full max-w-md relative">
      <SearchIcon className="absolute left-2 top-[24%] transform -translate-y-1/2 text-gray-500 z-10" />
      <Input
        type="text"
        placeholder="Search for location"
        className="w-full pl-10 text-center rounded-lg"
      />
      <Button className=" rounded-lg">Check Weather</Button>
    </form>
  );
};

export default SearchForm;
