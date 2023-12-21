import React, { useState } from 'react'
import ModalForm from './ModalForm'

function Select() {
    const [buttonName, setButtonName] = useState('');
    const modalFunction = event => {
        console.log(event.currentTarget.innerHTML)
        setButtonName(event.currentTarget.innerHTML);
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Previous Quetion Paper</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident? Inventore vel doloribus temporibus neque aliquid. Est quaerat numquam laborum. Eaque alias aliquid nobis similique blanditiis cupiditate consequuntur nemo accusantium.</p>
                <button className='btn btn-secondary' id='quetionPaper' onClick={modalFunction} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go TO Quetion Paper</button>
            </div>
            <div className="card">
                <h1>Video Lectures</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident? Inventore vel doloribus temporibus neque aliquid. Est quaerat numquam laborum. Eaque alias aliquid nobis similique blanditiis cupiditate consequuntur nemo accusantium.</p>
                <button className='btn btn-secondary' id='videoLectures' onClick={modalFunction} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go TO Vieo Lectures</button>
            </div>
            <div className="card">
                <h1>Download Notes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident? Inventore vel doloribus temporibus neque aliquid. Est quaerat numquam laborum. Eaque alias aliquid nobis similique blanditiis cupiditate consequuntur nemo accusantium.</p>
                <button className='btn btn-secondary' id='notes' onClick={modalFunction} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go TO Notes</button>
            </div>
            <div className="card">
                <h1>See Result</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident? Inventore vel doloribus temporibus neque aliquid. Est quaerat numquam laborum. Eaque alias aliquid nobis similique blanditiis cupiditate consequuntur nemo accusantium.</p>
                <button className='btn btn-secondary' id='result' onClick={modalFunction} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Go TO See Result</button>
            </div>
            <ModalForm buttonName={buttonName} ></ModalForm>
        </div>
    )
}

export default Select