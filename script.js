let selector = element => document.querySelector(element);
let audio;
let increaseVolume;

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let hrufsOrdered={  alif:'ا',ba:'ب',   taa:'ت',tha:'ث',jeem:'ج', haa:'ح',khaa:'خ',dal:'د',  dhal:'ذ', raa: 'ر',jaa:'ز',seen:'س',sheen:'ش', saad:'ص', dhaad:'ض',toa:'ط',dhaa:'ظ',ain:'ع',ghain:'غ',
faa: 'ف', qaaf:'ق', kaaf:'ك',laam:'ل', meem:'م', noon: 'ن',ha:'ه',waw:'و', yaa:'ي'}
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
// ............variable initialization and decleration............
let pausrid;
let timer='';
let hrufsArrey=[];



selector('#volume').textContent=`${(100/1)* 0.4}%`;
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

        return `<div class="row" id="arb">
            ${data}
        </div>
        `;
}
let newAudio=(path)=>{
        audios = new Audio(path);
        volumeIncrease();
        audios.play();
        return;
}
let reloader=()=>{
        clearTimeout(pausrid.timer);
        if(selector('#eng')){
                autouPlay(alphabets,0)
                }
                
            
                if (selector('#arb')) {
                     for (const key in hrufsOrdered) {
                        
                            hrufsArrey.push(key)
                          
                     }
                 autouPlay(hrufsArrey,0);
            
            
                }
}
let autouPlay = (alphabets,count) => {
        
        alphabets.forEach((alphabet)=>{
                selector(`#${alphabet}`).style.backgroundColor='#007bff';

        })
        if (count==alphabets.length) {
                selector('#play-controls').innerHTML=` 
                <span>        
                <i class="fas fa-redo-alt fa-2x ml-2" title="reload" id="reload"></i>
                </span>`
                return console.log("recusion is finish");
        
        }


     
                selector(`#${alphabets[count]}`).style.backgroundColor='green';
            
                
                audios = new Audio(`audio${(selector('#eng'))?'/sounds/':'/'}${alphabets[count]}.mp3`);
                volumeIncrease();
                audios.play();

                 count++;
 
timer = setTimeout(autouPlay,3000,alphabets,count);
 pausrid= {'timer':timer,'count':count};
 return;
        
}
let init = () => {
        selector('#left-panel').innerHTML = arabicAlphabets();
}

let playAllBtn=()=>`<button type="button" name="" id="play-all" class="btn btn-secondary btn-sm btn-block col-4">Play All</button>`;



selector('#drum-container').addEventListener('click', e => {


        if (e.target.matches('input')) {

                increaseVolume = e.target.value;
           selector('#volume').textContent=`${(100/1)*increaseVolume}%`;
                

        }

        if (e.target.name == "english") {

                alphabets.forEach(element => {


                        if (element == e.target.id) {
                               newAudio(`audio/sounds/${element}.mp3`);
                               return;
                        }

                });
        }

        if (e.target.name == "arabic") {
                let i = 1;
                for (const key in hruufs) {
                       
                        if (key == e.target.id) {
                              newAudio(`audio/${key}.mp3`);
                              return;
                        }
                }

        }


        if (e.target.matches('div')) {
                if (e.target.id == 'btn-switch') {
                        //    console.log(englishAlphabets());
                        if (selector('#btn-switch').style.marginLeft == "3.4em") {
                                selector('#btn-switch').style.marginLeft = "-1em";
                                selector('.switch').style.backgroundColor = "#007bff";
                                selector('#title').textContent = "Arabic";
                                selector('#left-panel').innerHTML = arabicAlphabets();
                                (pausrid.timer)?clearTimeout(pausrid.timer):'';
                                selector('#play-controls').innerHTML=playAllBtn();
                                // console.log("back");

                                return;
                        }
                        selector('#btn-switch').style.marginLeft = "3.4em";
                        selector('.switch').style.backgroundColor = "#28a745";
                        selector('#title').textContent = "English";
                        selector('#left-panel').innerHTML = englishAlphabets();
                        (pausrid.timer)?clearTimeout(pausrid.timer):'';
                        selector('#play-controls').innerHTML=playAllBtn();

                }


        }
      
        if (e.target.matches('path') || e.target.id == 'settings') {
                if (selector('#control-pannel').style.display == "block") {
                        selector('#control-pannel').style.display = "none";
                        return;
                }
                selector('#control-pannel').style.display = "block";


        }

})




selector('.card-header').addEventListener('click', e => {
        if (e.target.id=='play-all') {
               
    if(selector('#eng')){
    autouPlay(alphabets,0);
    }
    

    if (selector('#arb')) {
         for (const key in hrufsOrdered) {
            
                hrufsArrey.push(key)
              
         }
     autouPlay(hrufsArrey,0);


    }
     selector('#play-controls').innerHTML=`
                          <span>
                          <i class="fa fa-pause fa-2x" aria-hidden="true"  id="pause"></i>
                          </span>

                          <span>        
                <i class="fas fa-redo-alt fa-2x ml-2" title="reload" id="reload"></i>
                </span>
     `;

        }
        if(selector("#pause")){
                if (e.target.matches('path') || e.target.id=='pause') {
      
                    
                            clearTimeout(pausrid.timer);
                 
                        selector('#play-controls').innerHTML=`
                        <span>        
                        <i class="fa fa-play fa-2x" title="play" aria-hidden="true" id="play"></i>
                        </span>
                        ` ;
                        return;
                             }
        }
    
     if (selector("#play")) {
        if (e.target.matches('path') ||e.target.id=='play') {
               
                selector('#play-controls').innerHTML=`
                <span>        
                <i class="fa fa-pause fa-2x" title="pause" aria-hidden="true"  id="pause"></i>
                </span>
                <span>        
                <i class="fas fa-redo-alt fa-2x ml-2" title="reload" id="reload"></i>
                </span>
         ` ;
           (selector('#arb'))?(autouPlay(hrufsArrey,pausrid.count)):(autouPlay(alphabets,pausrid.count));
         
         return;
            
              }
     }
  

     if (e.target.matches('path') || e.target.id=='reload') {


        clearTimeout(pausrid.timer);
        if(selector('#eng')){
                autouPlay(alphabets,0)
                }
                
            
                if (selector('#arb')) {
                     for (const key in hrufsOrdered) {
                        
                            hrufsArrey.push(key)
                          
                     }
                 autouPlay(hrufsArrey,0);
            
            
                }
     }
   

})



window.onunload = init();