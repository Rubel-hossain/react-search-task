import useGlobalContext from "../hooks/useGlobalContext";
export default function Search() {
  const { query, searchInputChange } = useGlobalContext();
  return (
    <div className="search-form">
      <input
        type="search"
        placeholder="Search Here"
        value={query}
        onChange={(e) => searchInputChange(e.target.value)}
      />
    </div>
  );
}
