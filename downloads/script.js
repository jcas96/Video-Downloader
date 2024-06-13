let  downloadBtn = document.getElementById("btn");
let link = document.querySelector(".link");
let serverURL = 'http://localhost:8000';

downloadBtn.addEventListener('click', () =>{
    download(link.value);
});

async function download(URL){
    const res = await fetch(`${serverURL}/downloadvid?url=${URL}`);
    if(res.status == 200){
        var name = document.createElement('a');
        name.href = `${serverURL}/downloadvid?url=${URL}`;
        name.setAttribute('download','');
        name.click();
    }   else if(res.status == 400){
        alert('invalid URL');
    }
}