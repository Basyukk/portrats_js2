const modals = () =>{
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false, animation = 'animate__bounceInDown'){
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');

       

        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{

                btnPressed = true

                if (e.target){
                    e.preventDefault;
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animate__animated');
                });
                modal.style.display = 'block';
                modal.classList.add(animation);
                document.body.style.overflow = 'hidden';

                if (destroy){
                    item.remove();
                }

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
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight - 1)) {
                document.querySelector(selector).click();
            }
        });
    }
    // showModalByTime('.popup-consultation', 6000) ; 

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close', '', 'animate__rollIn');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

}



export default modals;