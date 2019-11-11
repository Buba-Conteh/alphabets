let selector = element => document.querySelector(element);
let audio;
let increaseVolume;

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'h', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let hruufs = {
        tha: 'ث',
        taa: 'ت',
        ba: 'ب',
        alif: 'ا',
        
        dal: 'د',
        khaa: 'خ',
        haa: 'ح',
         jeem: 'ج',
      
        
         seen: 'س',
         jaa: 'ز',
         raa: 'ر',
        dhal: 'ذ',
        
        toa: 'ط',
        dhaad: 'ض',
        saad: 'ص',
        sheen: 'ش',
      
       
        faa: 'ف',
        ghain: 'غ',
        ain: 'ع',
        dhaa: 'ظ',
        
        
       
        meem: 'م',
        laam: 'ل',
        kaaf: 'ك',
        qaaf: 'ق',

        yaa: 'ي',
        waw: 'و',
        ha: 'ه',
        noon: 'ن',
      
      
        
        
};
// hruufs=hruufs.reverse();
console.log(hruufs);

let volumeIncrease = () => {
        return audios.volume = (increaseVolume) ? increaseVolume : 0.4;
}
let englishAlphabets = () => {
        let data = '';
        alphabets.forEach(element => {


                data += `

                <div class="col-3">
                        <button type="button" name="english" id="${element}"  class="btn btn-primary btn-lg btn-block m-1">
                          ${element}
                        </button>
                        
                    </div>            
       `;
        });

        return `<div class="row" id="eng">
            ${data}
        </div>
        `;
}
let arabicAlphabets = () => {
        let data = '';
        for (const key in hruufs) {



                data += `

                <div class="col-3">
                        <button type="button" name="arabic" id="${key}" class="btn btn-primary btn-lg btn-block m-1">
                          ${hruufs[key]}
                        </button>
                        
                    </div>            
       `;
        }

        return `<div class="row" id="eng">
            ${data}
        </div>
        `;
}


selector('#drum-container').addEventListener('click', e => {


        if(e.target.matches('input')){
    
                                increaseVolume=e.target.value;
                        //        console.log(audios.volume);
                               
                                   
                               }

        if (e.target.name == "english") {

                alphabets.forEach(element => {


                        if (element == e.target.id) {
                                audios = new Audio(`audio/sounds/${element}.mp3`);
                                volumeIncrease();
                                audios.play();
                                return;
                        }

                });
        }

        if (e.target.name == "arabic") {
                let i = 1;
                for (const key in hruufs) {
                        // console.log(i++);
                        if (key == e.target.id) {
                                audios = new Audio(`audio/${key}.mp3`);
                                volumeIncrease();
                                audios.play();
                                return;
                        }
                }
              
        }


        // document.innerHtml


        //     console.log(e.target.id);

        if (e.target.matches('div')) {
                if (e.target.id == 'btn-switch') {
                        //    console.log(englishAlphabets());
                        if (selector('#btn-switch').style.marginLeft == "3.4em") {
                                selector('#btn-switch').style.marginLeft = "-1em";
                                selector('.switch').style.backgroundColor = "#007bff";
                                selector('#title').textContent="Arabic";
                                selector('#left-panel').innerHTML = arabicAlphabets();
                                
                                console.log("back");

                                return;
                        }
                        selector('#btn-switch').style.marginLeft = "3.4em";
                        selector('.switch').style.backgroundColor = "#28a745";
                        selector('#title').textContent="English";
                        selector('#left-panel').innerHTML = englishAlphabets();
                       
                   

                }
                
               
        }
        //     console.log(e.target);
        if (  e.target.matches('path') || e.target.id=='settings'){
                if ( selector('#control-pannel').style.display=="block") {
                        // let test=
                        selector('#control-pannel').style.transition='1000ms';
                      
                        selector('#control-pannel').style.visibility="hidden";
                        
                        // selector('#control-pannel').style.display="none";
                        return;
                }


                selector('#control-pannel').style.transition='1000ms';
                selector('#control-pannel').style.visibility="visible";
               selector('#control-pannel').style.display="block";
         
                
        }

})


selector('#control-pannel').addEventListener('click', e => {




})

let init=()=>{
        selector('#left-panel').innerHTML=arabicAlphabets();
}

window.onunload=init();