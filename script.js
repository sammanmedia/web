fetch("https://api.mininxd.my.id/brat/limit").then(res => {
 return res.json() 
}).then(data => {
  console.log(data)
  })



generateBtn.addEventListener('click', () => {
    if(!inputText.value) {
      msg.innerHTML = "Masukan teks dulu";
      msgBar.style.display = "block";
    } else {
      generateBtn.setAttribute('disabled', true);
      bratImg.src = "./assets/Program_wait.ico";
      fetch(`https://api.mininxd.my.id/brat?txt=${inputText.value}`)
        .then(res => {
         return res.json() 
      }).then(data => {
         bratImg.src = data.url;
         msg.innerHTML = `Cara simpan gambar cukup di hold lalu <strong>Simpan Gambar</strong>, &nbsp; untuk desktop klik kanan lalu <strong>Save As</strong>`
      }).finally(() => {
         msgBar.style.display = "block";
         generateBtn.removeAttribute('disabled')
    })
  }
})

inputText.addEventListener('focus', () => {
  bratImg.style.height = "10vh"
})
inputText.addEventListener('blur', () => {
  bratImg.style.height = "auto"
})
