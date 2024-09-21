const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach(trigger => {
    trigger.onclick = () =>{
        const acordeon = trigger.parentElement

        document.querySelectorAll('.acordeon').forEach(acc=>{
            if(acc !== acordeon){
                acc.classList.remove('open')
            }
        })

        acordeon.classList.toggle('open')
    }
});