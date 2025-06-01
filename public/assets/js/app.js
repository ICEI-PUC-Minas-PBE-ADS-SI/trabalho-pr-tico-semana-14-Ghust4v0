document.querySelectorAll('.col-md-3').forEach(img => {
  img.addEventListener('click', () => {
    const id = img.getAttribute('data-id');
    window.location.href = `detalhes.html?id=${id}`;
  });
});

document.querySelectorAll('.d-block').forEach(img => {
  img.addEventListener('click', () => {
    const id = img.getAttribute('data-id');
    window.location.href = `detalhes.html?id=${id}`;
  });
});

function Main(){

  location.href = "index.html"

}

function login(){
  location.href = "loginn.html"
}

function favoritos(){
  location.href = "favorito.html"
}