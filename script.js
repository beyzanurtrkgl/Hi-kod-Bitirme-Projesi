/*Fizik*/

var fizik=[
    {
        name: "Marie Curie",
        img: "img/marie2.jpg",
        link: "fizik.html#Marie"
    },

    {
        name: "Lisa Meitner",
        img: "img/Lise Meitner2.jpg",
        link:"fizik.html#Lisameitner"
    },

    {
        name: "Vera Rubin",
        img: "img/2084-vera-rubin.jpg",
        link: "fizik.html#Vera"
    },

    {
        name: "Chien-Shiung Wu",
        img: "img/Chien-Shiung Wu.jpg",
        link: "fizik.html#Chien"
    },

    {
        name: "Helen Quinn",
        img: "img/HelenQuinn.jpg",
        link: "fizik.html#Helen"
    },

    {
        name: "Donna Strickland",
        img: "img/Donna Strickland.jpg",
        link: "fizik.html#Donna"
    },

    {
        name: "Mildred Dresselhaus",
        img: "img/Mildred Dresselhaus.jpg",
        link: "fizik.html#Mildred"
    },

    {
        name: "Lisa Randall",
        img: "img/Lisa Randall.jpg",
        link: "fizik.html#Lisar"
    },
]



document.querySelector(".sc1").addEventListener('click',function(){

    yazdir()
})

var element_img =document.querySelectorAll(".card-img-top");
var element_inner = document.querySelectorAll(".alan");

function yazdir(){

   for(var i=0; i<8;i++){
    element_img[i].src= fizik[i].img;
    element_inner[i].innerHTML= fizik[i].name;
    element_inner[i].href= fizik[i].link;
   }
}


/* kimya*/

var kimya=[
    {
        name: "Frances Arnold",
        img: "img/kimya/Frances Arnold.jpg",
        link: "kimya.html#Frances"
    },

    {
        name: "Rosalind Franklin",
        img: "img/kimya/rosalind-franklin.jpg",
        link:"kimya.html#Rosalind"
    },

    {
        name: "Ada Yonath",
        img: "img/kimya/Ada Yonath.jpg",
        link: "kimya.html#Ada"
    },

    {
        name: "Gertrude B. Elion",
        img: "img/kimya/Gertrude B. Elion.jpg",
        link: "kimya.html#Gert"
    },

    {
        name: "Irène Joliot-Curie",
        img: "img/kimya/Irène Joliot-Curie.jpg",
        link: "kimya.html#Irene"
    },

    {
        name: "Alice Ball ",
        img: "img/kimya/Alice Ball.jpg",
        link: "kimya.html#Alice"
    },

    {
        name: "Elaine Fuchs",
        img: "img/kimya/Elaine Fuchs.jpg",
        link: "kimya.html#Elaine"
    },

    {
        name: "Tu Youyou",
        img: "img/kimya/Tu Youyou.jpg",
        link: "kimya.html#Tu"
    },
]

document.querySelector(".sc2").addEventListener('click',function(){
    
        yazdir2()
    })
    
    
    function yazdir2(){
    
       for(var i=0; i<8;i++){
        element_img[i].src= kimya[i].img;
        element_inner[i].innerHTML= kimya[i].name;
        element_inner[i].href= kimya[i].link;
       }
    }


/*biyoloji*/

var biyoloji=[
    {
        name: "Barbara McClintock",
        img: "img/biyoloji/Barbara McClintock.jpg",
         link: "biyoloji.html#Bar"
    },
    
    {
        name: "Lynn Margulis",
        img: "img/biyoloji/Lynn Margulis.jpg",
        link:"biyoloji.html#Linn"
    },
    
    {
        name: "Mary-Claire King",
        img: "img/biyoloji/Mary-Claire King.jpg",
        link: "biyoloji.html#Mary"
    },
    
    {
        name: "May-Britt Moser",
        img: "img/biyoloji/May-Britt Moser.jpg",
        link: "biyoloji.html#May"
    },
    
    {
        name: "Linda Buck",
        img: "img/biyoloji/Linda Buck.jpg",
        link: "biyoloji.html#Linda"
    },
    
    {
        name: "Emmanuelle Charpentier ",
        img: "img/biyoloji/Emmanuelle Charpentier.jpg",
        link: "biyoloji.html#Emm"
    },
    
    {
        name: "Jennifer Doudna",
        img: "img/biyoloji/Jennifer Doudna.jpg",
        link: "biyoloji.html#Jen"
    },
    
    {
        name: "Dian Fossey",
        img: "img/biyoloji/Dian Fossey.jpg",
        link: "biyoloji.html#Dian"
    },
]

document.querySelector(".sc3").addEventListener('click',function(){
    
    yazdir3()
})


function yazdir3(){

   for(var i=0; i<8;i++){
    element_img[i].src= biyoloji[i].img;
    element_inner[i].innerHTML= biyoloji[i].name;
    element_inner[i].href= biyoloji[i].link;
   }
}



/*matematik*/

var matematik=[
    {
        name: "Hypatia",
        img: "img/matematik/Hypatia.jpg",
        link: "matematik.html#Hy"
    },
    
    {
        name: "Sophie Germain",
        img: "img/matematik/Sophie Germain.webp",
        link:"matematik.html#Sop"
    },
    
    {
        name: "Sofia Kovalevskaya ",
        img: "img/matematik/Sofia Kovalevskaya.jpg",
        link: "matematik.html#Sof"
    },
    
    {
        name: "Maria Agnesi",
        img: "img/matematik/Maria Agnesi.jpg",
        link: "matematik.html#Maria"
    },
    
    {
        name: "Caroline Herschel",
        img: "img/matematik/Caroline Herschel.jpg",
        link: "matematik.html#Car"
    },
    
    {
        name: "Joan Clarke",
        img: "img/matematik/Joan Clarke.jpg",
        link: "matematik.html#Joan"
    },
    
    {
        name: "Florence Nightingale",
        img: "img/matematik/Florence Nightingale.jpg",
        link: "matematik.html#Flor"
    },
    
    {
        name: "Dorothy Vaughan",
        img: "img/matematik/Dorothy Vaughan.jpg",
        link: "matematik.html#Dor"
    },
]

document.querySelector(".sc4").addEventListener('click',function(){
    
    yazdir4()
})


function yazdir4(){

   for(var i=0; i<8;i++){
    element_img[i].src= matematik[i].img;
    element_inner[i].innerHTML= matematik[i].name;
    element_inner[i].href= matematik[i].link;
   }
}


/*bilgisayar bilimleri*/

var bilgisayar_bilimi=[
    {
        name: "Grace Hopper",
        img: "img/bilgisayar bilimleri/Grace Hopper.webp",
        link: "bilgisayarbilimleri.html#Grace"
    },
    
    {
        name: "Karen Spärck Jones ",
        img: "img/bilgisayar bilimleri/Karen Spärck Jones.jpg",
        link:"bilgisayarbilimleri.html#Karens"
    },
    
    {
        name: "Radia Perlman",
        img: "img/bilgisayar bilimleri/Radia Perlman.jpg",
        link: "bilgisayarbilimleri.html#Radia"
    },
    
    {
        name: "Barbara Liskov",
        img: "img/bilgisayar bilimleri/Barbara Liskov.jpg",
        link: "bilgisayarbilimleri.html#Barbara"
    },
    
    {
        name: "Anita Borg",
        img: "img/bilgisayar bilimleri/Anita Borg.jpg",
        link: "bilgisayarbilimleri.html#Anita"
    },
    
    {
        name: "Shafi Goldwasser ",
        img: "img/bilgisayar bilimleri/Shafi Goldwasser.jpg",
        link: "bilgisayarbilimleri.html#Shafi"
    },
    
    {
        name: "Radhika Nagpal",
        img: "img/bilgisayar bilimleri/Radhika Nagpal.jpg",
        link: "bilgisayarbilimleri.html#Radhika"
    },
    
    {
        name: "Lynn Conway",
        img: "img/bilgisayar bilimleri/Lynn Conway.jpg",
        link: "bilgisayarbilimleri.html#Lynn"
    },
]


document.querySelector(".sc5").addEventListener('click',function(){
    yazdir5()
})


function yazdir5(){

   for(var i=0; i<8;i++){
    element_img[i].src= bilgisayar_bilimi[i].img;
    element_inner[i].innerHTML= bilgisayar_bilimi[i].name;
    element_inner[i].href= bilgisayar_bilimi[i].link;
   }
}




