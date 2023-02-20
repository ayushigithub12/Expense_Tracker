import React,{ useState } from "react";
import Card from "./Card";
import style from './Modal.module.css';
const Modal = () => {
 const[isOpen,setIsOpen]= useState(false);

    return (
        <Card>
            <div className={style.header}>
                <header>
                    <h1>Add Item</h1>
                </header>
            </div>
            <form>
                <div className={style.content}>
                    <div>
                        <label>Title</label>
                        <input type="title"/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" />
                    </div>
                </div>
            </form>
        </Card>
    );
};
export default Modal;
