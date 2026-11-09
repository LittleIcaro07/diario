const revealButton = document.getElementById('reveal');
const secret = document.getElementById('secret');

revealButton.addEventListener('click', () => {
const isOpen = secret.classList.toggle('show');

revealButton.textContent = isOpen
? '✧ Fechar o segredo ✧'
: '✧ Romper o selo secreto ✧';

if (isOpen) {
secret.scrollIntoView({
behavior: 'smooth',
block: 'center'
});
}
});
