
    let prev =document.getElementById('prev')
    let next =document.getElementById('next')
    let imageArr=[
      "https://i.pinimg.com/236x/50/70/f9/5070f9e7af565d1d16a3edfd7f53cd1e.jpg",
      "https://i.pinimg.com/736x/af/d6/86/afd68675e6822d6f99ce212b6e312adf.jpg",
      "https://i.pinimg.com/736x/7d/52/93/7d52936f9e2964e42f1fb04a3fc348ef.jpg",
      "https://i.pinimg.com/564x/e7/fb/01/e7fb01b6957cf719b27b35a27af93010.jpg",
      "https://i.pinimg.com/564x/9c/2b/bb/9c2bbb75e54744210b22a76589cf4d0e.jpg",
      "https://i.pinimg.com/564x/cb/92/5a/cb925a81719f733d4ba03af81fce634d.jpg",
      "https://i.pinimg.com/564x/4c/8b/fe/4c8bfe60a58fcd684205162e8305b1f9.jpg",
      "https://i.pinimg.com/564x/86/7c/34/867c34e6eddbbb29e5dab42b8920f94b.jpg",
      "https://i.pinimg.com/564x/61/01/b4/6101b4c90a015429d717d97db58c97ac.jpg",
      "https://i.pinimg.com/564x/13/45/c3/1345c34e01ad1825f6c5725364cc0d8a.jpg",
      "https://i.pinimg.com/236x/33/f4/35/33f435d3196ae26fb979fc11ab50161e.jpg",
      "https://i.pinimg.com/564x/f8/79/0a/f8790a187ddb5bed6a5923d47864f255.jpg",
      "https://i.pinimg.com/236x/e0/be/67/e0be67eefa8023b220189752e6dfac3c.jpg",
      "https://i.pinimg.com/564x/f7/1c/18/f71c18d11ca472cb6c8ffe633f908ff1.jpg",
      "https://i.pinimg.com/564x/f5/e9/f3/f5e9f31edf19955affb137a79c142e4d.jpg",
      "https://i.pinimg.com/564x/cd/60/c3/cd60c3fb1c13ce1e8c7978a0955e1475.jpg",
      "https://i.pinimg.com/564x/e0/3e/db/e03edbe588d3866d539e5bbb35d9080c.jpg",
      "https://i.pinimg.com/564x/b0/63/f1/b063f1b61fdd5f9481579f702f281c68.jpg",
      "https://i.pinimg.com/564x/a6/f3/02/a6f3025a30378a2be3c349630048f79f.jpg",
      "https://i.pinimg.com/236x/0c/e7/48/0ce748e674e8c397befe811696e315b5.jpg",
      "https://i.pinimg.com/236x/7a/de/51/7ade5190214bb30b7a1d2949d2b10864.jpg"

    

    ]


    let image=document.querySelector('img')
    let currentImage= 0
    image.setAttribute('src',imageArr[currentImage]);
    prev.addEventListener('click',function(){
        currentImage--
        if(currentImage < 0){
            currentImage = imageArr.length -1;
        }
        image.setAttribute('src',imageArr[currentImage]);

      
    })

    next.addEventListener('click',function(){
        currentImage++;
        if(currentImage >= imageArr.length){
            currentImage =0
        }
        image.setAttribute('src',imageArr[currentImage]);
       
    })


    setInterval(() => {
        
        currentImage++;
        if(currentImage >= imageArr.length){
            currentImage =0
        }
        image.setAttribute('src',imageArr[currentImage]);


    }, 3000);



