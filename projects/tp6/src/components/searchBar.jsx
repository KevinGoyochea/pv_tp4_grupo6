function SearchBar({ setSearchTerm }) {
  return (
    <input type="text" placeholder="Buscar por nombre o ID" onChange={(e) => setSearchTerm(e.target.value)} />
  );
}

export default SearchBar;
