


// background block
export let animeMyBlocks=(Parent,childern)=>{
    
    for(let i=0;i<25;i++){

        const block=document.createElement("div");
        block.classList.add(childern);
    
        Parent.appendChild(block);
    }
    
    anime({
        targets:"."+childern,
        translateX:function(){
            return anime.random(-700,700);
        },
        translateY:function(){
            return anime.random(-500,500);
        },
        scale:function(){
            return anime.random(1,100);
        },
        easein:"linear",
        duration:3000,
        loop:true
    });
}



// fade out (login section & sign up section)
export function fadeOut(ele){
    anime({
        targets:ele,
        scale: [
            {value: 0, easing: 'easeOutSine', duration: 500},
            {value: 0, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: 0,
        easing: 'easeInOutQuad',

    });
}


// fade in (login section & sign up section)
export function fadeIn(ele){
    anime({
        targets:ele,
        scale: [
            {value: 1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200},
        ],
        delay: 0,
        easing: 'easeInOutQuad',
    })
}



// text animation

export function animeText(targetText){
    anime({
        // targets: targetText,
        // rotate:360,
        // scale: [
        //     {value: .1, easing: 'easeOutSine', duration: 500},
        //     {value: 1, easing: 'easeInOutQuad', duration: 1200}
        // ],
        // translateX:20,
        // points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        // baseFrequency: 0,
        delay: 200,
        // easing: 'easeInOutExpo'
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        // delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
}

export function animeText2(targetEl){
    anime({
        targets: targetEl,
        rotate:360,
        scale: [
            {value: .0, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        duration:4000,
        loop:true,
        delay:3000
    });
}
