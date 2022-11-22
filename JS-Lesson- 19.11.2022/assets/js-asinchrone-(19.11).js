loadPage ();

function loadPage(){
    let xhr = new XMLHttpRequest;

    xhr.open('GET','pages/main.html')
    xhr.send()

    console.log(xhr)
}