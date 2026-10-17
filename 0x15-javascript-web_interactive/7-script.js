async function fetchCharacter() {
  const character = document.querySelector('#character');

  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    character.textContent = data.name;
  } catch (error) {
    character.textContent = 'Could not load the character.';
    console.error(error);
  }
}

fetchCharacter();
