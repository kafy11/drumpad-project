import { useEffect } from 'react';

function useKeyDownTrigger(){
    useEffect(() => {
        document.addEventListener('keydown', function(event){
            const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${event.key}"]`);
            if (!audio) return;
        
            if(event.shiftKey && !audio.loop){
                audio.play();
            } else if(!audio.loop){
                audio.play();
            }
        
            audio.loop = event.shiftKey;
            audio.play();
        });
    },[]);
}

export default useKeyDownTrigger;