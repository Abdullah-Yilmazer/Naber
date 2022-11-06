//mesaj kutusunu altta başlatma
const mesajlasma_kutusu = document.getElementById("mesajlasma_kutusu")
mesajlasma_kutusu.scrollTop = mesajlasma_kutusu.scrollHeight - mesajlasma_kutusu.clientHeight;


//Kişileri seçme
const kisiler = document.querySelectorAll(".kisi")
kisiler.forEach((e) =>{
    e.addEventListener("click" ,() =>{
        for (let i = 0; i < kisiler.length; i++) {
            if (kisiler[i] != e) {
                kisiler[i].removeAttribute("aktif")
            } else {
                e.setAttribute("aktif","")
            }           
        }
    })
})


//Gönder tuşu ile yükle tuşu
const dosya = document.querySelector(".dosya")
const mesaj = document.getElementById("mesaj")
mesaj.addEventListener("keyup", mesaj_buton_degisimi)


//Fonksiyonlar
function mesaj_buton_degisimi() {
    if (mesaj.value == "") {
        dosya.innerHTML = '<input class="mesaj_gonder_buton yukle" id="mesaj_yukle" type="file"/>'
    } else {
        dosya.innerHTML = '<p class="mesaj_gonder_buton gonder" id="mesaj_gonder"></p>'
    }    
}


//ÇAlıştırılan fonksiyonlar
mesaj_buton_degisimi()
