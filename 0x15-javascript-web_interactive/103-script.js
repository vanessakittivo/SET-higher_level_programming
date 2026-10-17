document.addEventListener('DOMContentLoaded', () => {
  const languageCode = document.querySelector('#language_code');
  const translateButton = document.querySelector('#btn_translate');
  const hello = document.querySelector('#hello');

  async function translateHello() {
    const language = languageCode.value.trim();

    if (!language) {
      hello.textContent = 'Please enter a language code.';
      return;
    }

    try {
      const url = `https://hellosalut.stefanbohacek.dev/?lang=${encodeURIComponent(language)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      hello.textContent = data.hello;
    } catch (error) {
      hello.textContent = 'Could not load the translation.';
      console.error(error);
    }
  }

  translateButton.addEventListener('click', translateHello);
  languageCode.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      translateHello();
    }
  });
});
