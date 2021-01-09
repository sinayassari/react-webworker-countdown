export default function WebWorker() {
    let date;
    onmessage = function (event) {
        date = event.data;
    }
    const calcDueDate = () =>{
        if((date - new Date().getTime()) > 0) {
            let diff = date - new Date().getTime();
            let hours   = Math.floor(diff / 3.6e6);
            let minutes = Math.floor((diff % 3.6e6) / 6e4);
            let seconds = Math.floor((diff % 6e4) / 1000);
            postMessage({
                date: `${hours}:${minutes}:${seconds}`
            })
        }else if((date - new Date().getTime()) === 0) {
            console.log('ended')
            postMessage({
                date: 'dueDate is Ended',
                ended: true
            })
        }
        else if ((date - new Date().getTime()) < 0){
            postMessage({
                date: 'select a date from now',
            })
        }
    }
    setInterval(() => {
        calcDueDate();
    }, 1000);
}

WebWorker();
