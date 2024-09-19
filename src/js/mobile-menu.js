const buttonMenuRef = document.querySelector('[data-menu-button]');
const menuRef = document.querySelector('[data-menu]');
const bodyRef = document.querySelector('[data-noScroll]');

buttonMenuRef.addEventListener('click', () => {
  const expanded =
    buttonMenuRef.getAttribute('aria-expanded') === 'true' || false;

  buttonMenuRef.classList.toggle('is-open');
  buttonMenuRef.setAttribute('aria-expanded', !expanded);
  menuRef.classList.toggle('is-open');
  bodyRef.classList.toggle('is-open');
});
