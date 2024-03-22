import useGlobalContext from "../hooks/useGlobalContext";

export default function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="pagination-wrapper">
      <button onClick={() => getPrevPage()}>Prev</button>
      <p>
        page <span>{page + 1}</span> of <span>{nbPages}</span>
      </p>
      <button onClick={() => getNextPage()}>Next</button>
    </div>
  );
}
