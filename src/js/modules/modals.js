const modals = () =>{
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{

                if (e.target){
                    e.preventDefault;
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

            })
        });
        close.addEventListener('click', ()=> {

            windows.forEach(item => {
                item.style.display = 'none';
            });
                modal.style.display = 'none';
                document.body.style.overflow = '';

});

modal.addEventListener('click', (e)=>{
    if (e.target === modal) {

        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = ""; 
    }
})



    };

    function showModalByTime(selector, time){
        setTimeout(function(){
            let isDisplay = false;
    
            document.querySelectorAll('[data-modal]').forEach(item=>{
                if (getComputedStyle(item).display !== 'none'){
                    isDisplay = true;
                }
    
            })
    
            if(!isDisplay){
    
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
    
    
        }, time);
    }

    showModalByTime('.popup-consultation', 6000) ; 

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
}



export default modals;