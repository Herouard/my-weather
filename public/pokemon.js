const toggleButtonPkmn = document.getElementById('toggle-pokemon');
const STORAGE_KEY_PKMN = 'pokemonCssEnabled';
let pokemonLink;

// Fonction pour charger ou retirer la feuille de style
function setPokemonCss(enabled) {
  if (enabled) {
    if (!pokemonLink) {
      pokemonLink = document.createElement('link');
      pokemonLink.rel = 'stylesheet';
      pokemonLink.href = 'pokemon.css'; // Remplacez par le chemin réel
      document.head.appendChild(pokemonLink);
    }
    toggleButtonPkmn.classList.remove('btn-success');
    toggleButtonPkmn.classList.add('btn-danger');
    toggleButtonPkmn.textContent = '🎌';
  } else {
    pokemonLink?.remove();
    pokemonLink = null;
    toggleButtonPkmn.classList.remove('btn-danger');
    toggleButtonPkmn.classList.add('btn-success');
    toggleButtonPkmn.textContent = '🎏';
  }
  // Sauvegarde dans le localStorage
  localStorage.setItem(STORAGE_KEY_PKMN, enabled);
}

// Charger l'état au démarrage
const pokemonCssEnabled = JSON.parse(localStorage.getItem(STORAGE_KEY_PKMN)) || false;
setPokemonCss(pokemonCssEnabled);

// Gérer le clic sur le bouton
toggleButtonPkmn.addEventListener('click', () => {
  setPokemonCss(!pokemonLink);
});
