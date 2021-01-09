import React, {useEffect, useState} from 'react';
import WebWorkerEnabler from './WebWorkerEnabler.js';
import WebWorker from './dueWorker.js';
const workerInstance = new WebWorkerEnabler(WebWorker);
const DueDate = props => {
    const {dueDate} = props;
    const [countdown, setCountDown] = useState('');
    useEffect(() => {
        if(props) {
            workerInstance.postMessage(dueDate.getTime());
            workerInstance.onmessage = function (event) {
                setCountDown(event.data.date);
                if(event.data.ended) {
                    workerInstance.terminate()
                }
            }
        }
    }, [props])

    return (
        <>
            <strong className='countdown'>{countdown}</strong>
        </>
    )
}

export default DueDate;
