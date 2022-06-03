

function menu(){
    var links = document.querySelector(".links")
    var menu = document.getElementById("menu")
    if(links.classList.contains("showlinks")){
        links.classList.remove("showlinks")
        menu.setAttribute('src', 'menu-regular-24 (2).png')
    }else{
        links.classList.add("showlinks")
        menu.setAttribute('src','x.png')
    }
}

function carrinho(){
    var carrinho  = document.querySelector(".carrinhoitem")
    var cart = document.getElementById("cart")
    if(carrinho.classList.contains("carrinhoaparecer")){
        carrinho.classList.remove("carrinhoaparecer")
        cart.setAttribute('src','cart-solid-24.png')
    }else{
        carrinho.classList.add("carrinhoaparecer")
        cart.setAttribute('src','x.png')
        
    }
}

function setadireita(){
    var imagem = document.querySelector(".ps5-1")
    imagem.setAttribute("src", "PS52.PNG")
}

function setaesquerda(){
    var imagem = document.querySelector(".ps5-1")
    imagem.setAttribute("src", "ps5.png")
}


function setadireitapc(){
   var foto =  document.querySelector(".pcgamer")
   foto.setAttribute("src","pcgamer2.png")
}

function setaesquerdapc(){
    var foto = document.querySelector(".pcgamer")
    foto.setAttribute("src", "pc gamer.png")
}


function setadireitaxbox(){
    var foto = document.querySelector(".xbox")
    foto.setAttribute("src","xbox2.png")

}

function setaesquerdaxbox(){
    var foto = document.querySelector(".xbox")
    foto.setAttribute("src","xboxOne.png")
}

function setadireitamotog(){
    var foto = document.querySelector(".motog")
    foto.setAttribute("src","motog60.png")
}

function setaesquerdamotog(){
    var foto = document.querySelector(".motog")
    foto.setAttribute("src","motog602.png")
}

function setadireitaxr(){
    var foto = document.querySelector(".iphonexr")
    foto.setAttribute("src","iphonexr2.png")
}

function setaesquerdaxr(){
    var foto = document.querySelector(".iphonexr")
    foto.setAttribute("src","iphonexr.png")
}


function setadireita13(){
    var foto = document.querySelector(".iphone13")
    foto.setAttribute("src","iphone132.png")
}

function setaesquerda13(){
    var foto= document.querySelector(".iphone13")
    foto.setAttribute("src","iphone13.png")
}

function setadireitaram(){
    var foto = document.querySelector(".ram")
    foto.setAttribute("src","ram2.png")
}

function setaesquerdaram(){
    var foto = document.querySelector(".ram")
    foto.setAttribute("src","ram.png")
}

function setadireitassd(){
    var foto = document.querySelector(".ssd")
    foto.setAttribute("src","ssd2.png")
}

function setaesquerdassd(){
    var foto = document.querySelector(".ssd")
    foto.setAttribute("src","ssd.png")
}

function setadireitartx(){
    var foto = document.querySelector(".rtx")
    foto.setAttribute("src","rtx2.png")
}

function setaesquerdartx(){
    var foto = document.querySelector(".rtx")
    foto.setAttribute("src","rtx.png")
}

function setadireitateclado(){
    var foto = document.querySelector(".tecladovenda")
    foto.setAttribute("src","teclado2.png")
}

function setaesquerdateclado(){
    var foto = document.querySelector(".tecladovenda")
    foto.setAttribute("src","teclado_gamer.png")
}

function setadireitamouse(){
    var foto = document.querySelector(".mousevenda")
    foto.setAttribute("src", "mouse2.png")
    foto.classList.add("mousemenor")
}

function setaesquerdamouse(){
    var foto = document.querySelector(".mousevenda")
    foto.setAttribute("src", "mouse.png")
    foto.classList.remove("mousemenor")
}

function setadireitas20(){
    var foto = document.querySelector(".s20venda")
    foto.setAttribute("src","s202.png")
    
}

function setaesquerdas20(){
    var foto = document.querySelector(".s20venda")
    foto.setAttribute("src","galaxyS20.png")
}

function setadireitah7(){
    var foto = document.querySelector(".h7venda")
    foto.setAttribute("src","h7.png")
}

function setaesquerdah7(){
    var foto = document.querySelector(".h7venda")
    foto.setAttribute("src","headset.png")
}

function setadireitaxiaomi(){
    var foto = document.querySelector(".xiaomi")
    foto.setAttribute("src","xiaomi2.png")
    foto.classList.add("celmenor")
}

function setaesquerdaxiaomi(){
    var foto = document.querySelector(".xiaomi")
    foto.setAttribute("src","xiaomi.png")
    foto.classList.remove("celmenor")
}

function comprar(){
    var bloco = document.querySelector(".carrinho")
    var carrinho = document.querySelector("#cart")
    cart.setAttribute("src","x.png")
    bloco.classList.add("carrinhocomprar")

}

function fechar(){
    var cart = document.querySelector("#cart")
    var bloco = document.querySelector(".carrinho")
    var infos = document.querySelector(".infojs")
    var titulo = document.querySelector(".tituloprodutos")
    var preco = document.querySelector(".precocarrinho")
    var valor = document.querySelector(".precosvenda")
    var antes = document.querySelector(".de")
    var depor = document.querySelector(".depor")
    cart.setAttribute("src","cart-solid-24.png")
    if(bloco.classList.contains("carrinhocomprar")){
        bloco.classList.remove("carrinhocomprar")
    }
    infos.innerHTML = titulo.textContent
    preco.innerHTML = valor.textContent
    antes.innerHTML = depor.textContent
    
}

function mais(){
    var qnt = document.querySelector("#quantidade")
    qnt.innerHTML = "2"

    
    
}

function menos(){
    var qnt = document.querySelector("#quantidade")
    qnt.innerHTML = "1"
    
    

}

