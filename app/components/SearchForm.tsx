import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query?:string}) => {
  return (
    <Form action="/home" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        type="text"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">{query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white"> 
            <Search className="size-5"/>    
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;