function searchBarComponent() {
  return `
  <div class="search-form-container">
    <form class="search-form">
      <input id="searchbar" minlength="3" pattern="[a-zA-Z]*" type="text" class="input" placeholder="search for a city"/>
    </form>
  </div>`;
}

export default searchBarComponent;
