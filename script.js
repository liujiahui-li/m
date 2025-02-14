// JavaScript Document
const buttons = document.querySelectorAll(".button")

const button_reset = document.querySelector(".button_reset")

const txt = document.querySelector(".txt")

const imgGif = document.querySelector(".img-gif")

const ohyes = {
	text:"贴贴~<br>我知道你会同意哒(ɔˆз(ˆ⌣ˆc)",
	image:"./images/cat-yes.gif"
}

const alternatives =[
	{ text:"", image:"./images/cat-01.gif" },
	{ text:"真的不吗？", image:"./images/cat-02.gif" },
	{ text:"再想想嘛", image:"./images/cat-03.gif" },
	{ text:"我不是你最爱的大宝宝了吗", image:"./images/cat-04.gif" },
	{ text:"又逗我，哼", image:"./images/cat-05.gif" },
]

let idx = 0

function updateDisplay(o){
	imgGif.src=o.image
	txt.innerHTML = o.text
}

console.log(buttons)
button_reset.addEventListener("click",function(){
	idx = 0
	updateDisplay(alternatives[idx])
	buttons.forEach(function(item){
		item.style.display = "inline-block"
	})
	button_reset.style.display = "none"
})


buttons.forEach(function(btn){
	btn.addEventListener("click",function(){
		if(btn.id =="y"){
			buttons.forEach(function(item){
				item.style.display = "none"
			})
			updateDisplay(ohyes)
			const sound = document.getElementById("h")
			sound.volume = 0.3
			sound.play()
		}
		
		if(btn.id =="n"){
			const sound = document.getElementById("s")
			sound.currentTime=0;
			sound.volume = 0.3
			sound.play()
			idx += 1
			if(idx < alternatives.length ){
				console.log(alternatives[idx])
				updateDisplay(alternatives[idx])
			}else{
				buttons.forEach(function(item){
					item.style.display = "none"
				})
				button_reset.style.display="inline-block"   
			}
			
			
		}
	})
})