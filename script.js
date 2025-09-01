const images = document.getElementById("image")
Array.from(document.getElementsByClassName("i")).forEach(img => {
  img.addEventListener('dblclick',(e)=>{
    console.log("Image double clicked");
    img.style.display = "none"
  })
  img.addEventListener('click', () => {
    console.log("Image clicked");
    console.log(`${img.style.height}`)
    const currentHeight = parseInt(img.style.height) || img.height || 150;
    img.style.height = (currentHeight + 50) + "px";
  });
});
