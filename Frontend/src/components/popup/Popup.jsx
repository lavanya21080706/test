// import styles from './Popup.module.css';
// import { useState } from 'react';
// import { FaTrash } from 'react-icons/fa';

// function PopUp() {
//     const [checkedCount, setCheckedCount] = useState(0);
//     const [inputFields, setInputFields] = useState([]);

//     // Function to handle adding input fields
//     const addInputField = () => {
//         const newInputFields = [
//             ...inputFields,
//             { id: inputFields.length + 1, value: '', checked: false },
//         ];
//         setInputFields(newInputFields);
//     };
//     // Function to handle changing input field value
//     const handleChange = (id, event) => {
//         const newInputFields = inputFields.map(field => {
//             if (field.id === id) {
//                 return { ...field, value: event.target.value };
//             }
//             return field;
//         });
//         setInputFields(newInputFields);
//     };

//     // Function to handle checkbox change
//     const handleCheckboxChange = (id, checked) => {
//         const newInputFields = inputFields.map(field => {
//             if (field.id === id) {
//                 return { ...field, checked };
//             }
//             return field;
//         });
//         setInputFields(newInputFields);
//         setCheckedCount(newInputFields.filter(field => field.checked).length);
//     };

//     // Function to handle deleting input field
//     const handleDelete = id => {
//         const newInputFields = inputFields.filter(field => field.id !== id);
//         setInputFields(newInputFields);
//         setCheckedCount(newInputFields.filter(field => field.checked).length);
//     };

//     return (
//         <div className={styles.overlay}>
//             <div className={styles.popup_container}>
// <span className={styles.title}>Title<span className={styles.asterisk}>*</span></span>
// <input type='text' placeholder='Enter Task Title' className={styles.taskTitle} />
// <div className={styles.priorityBox}>
//     <span className={styles.priority}>Select Priority<span className={styles.asterisk}>*</span></span>
//     <div className={styles.prior}>
//         <span className={styles.highPriority}></span>
//         <span className={styles.hp}>HIGH PRIORITY</span>
//     </div>
//     <div className={styles.prior}>
//         <span className={styles.mp}></span>
//         <span className={styles.hp}>MODERATE PRIORITY</span>
//     </div>
//     <div className={styles.prior}>
//         <span className={styles.lp}></span>
//         <span className={styles.hp}>LOW PRIORITY</span>
//     </div>
// </div>
//                 <div className={styles.checklist}>Checklist ({checkedCount}/{inputFields.length})<span className={styles.asterisk}>*</span></div>
//                 <div className={styles.inputContainer}>
//                 {inputFields.map(field => (
//                     <div key={field.id} className={styles.inputfieldsBox}>
//                         <input
//                             type="checkbox"
//                             checked={field.checked}
//                             onChange={e => handleCheckboxChange(field.id, e.target.checked)}
//                             className={styles.checkBox}
//                         />
//                         <input
//                             type='text'
//                             placeholder='Add a task'
//                             value={field.value}
//                             onChange={e => handleChange(field.id, e)}
//                             className={styles.input}
//                         />
//                         <FaTrash onClick={() => handleDelete(field.id)} className={styles.dltIcon}/>
//                     </div>
//                 ))}
//                 </div>
//                 <span onClick={addInputField} className={styles.add}>+ Add New</span>


//             </div>

//         </div>
//     );
// }

// export default PopUp;

import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './Popup.module.css';

function PopUp() {
    const [checkedCount, setCheckedCount] = useState(0);
    const [inputFields, setInputFields] = useState([]);

    // Function to handle adding input fields
    const addInputField = () => {
        const newInputFields = [
            ...inputFields,
            { id: inputFields.length + 1, value: '', checked: false },
        ];
        setInputFields(newInputFields);
    };

    // Function to handle changing input field value
    const handleChange = (id, event) => {
        const newInputFields = inputFields.map(field => {
            if (field.id === id) {
                return { ...field, value: event.target.value };
            }
            return field;
        });
        setInputFields(newInputFields);
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (id, checked) => {
        const newInputFields = inputFields.map(field => {
            if (field.id === id) {
                return { ...field, checked };
            }
            return field;
        });
        setInputFields(newInputFields);
        setCheckedCount(newInputFields.filter(field => field.checked).length);
    };

    // Function to handle deleting input field
    const handleDelete = id => {
        const newInputFields = inputFields.filter(field => field.id !== id);
        setInputFields(newInputFields);
        setCheckedCount(newInputFields.filter(field => field.checked).length);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup_container}>
                <span className={styles.title}>Title<span className={styles.asterisk}>*</span></span>
                <input type='text' placeholder='Enter Task Title' className={styles.taskTitle} />
                <div className={styles.priorityBox}>
                    <span className={styles.priority}>Select Priority<span className={styles.asterisk}>*</span></span>
                    <div className={styles.prior}>
                        <span className={styles.highPriority}></span>
                        <span className={styles.hp}>HIGH PRIORITY</span>
                    </div>
                    <div className={styles.prior}>
                        <span className={styles.mp}></span>
                        <span className={styles.hp}>MODERATE PRIORITY</span>
                    </div>
                    <div className={styles.prior}>
                        <span className={styles.lp}></span>
                        <span className={styles.hp}>LOW PRIORITY</span>
                    </div>
                </div>     
                <div className={styles.checklist}>Checklist ({checkedCount}/{inputFields.length})<span className={styles.asterisk}>*</span></div>
                <div className={styles.inputContainer}>
                    {inputFields.length > 3 ? (
                        <div className={styles.inputContainerScroll}>
                            {inputFields.map(field => (
                                <div key={field.id} className={styles.inputfieldsBox}>
                                    <input
                                        type="checkbox"
                                        checked={field.checked}
                                        onChange={e => handleCheckboxChange(field.id, e.target.checked)}
                                        className={styles.checkBox}
                                    />
                                    <input
                                        type='text'
                                        placeholder='Add a task'
                                        value={field.value}
                                        onChange={e => handleChange(field.id, e)}
                                        className={styles.input}
                                    />
                                    <FaTrash onClick={() => handleDelete(field.id)} className={styles.dltIcon} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        inputFields.map(field => (
                            <div key={field.id} className={styles.inputfieldsBox}>
                                <input
                                    type="checkbox"
                                    checked={field.checked}
                                    onChange={e => handleCheckboxChange(field.id, e.target.checked)}
                                    className={styles.checkBox}
                                />
                                <input
                                    type='text'
                                    placeholder='Add a task'
                                    value={field.value}
                                    onChange={e => handleChange(field.id, e)}
                                    className={styles.input}
                                />
                                <FaTrash onClick={() => handleDelete(field.id)} className={styles.dltIcon} />
                            </div>
                        ))
                    )}
                </div>
                <span onClick={addInputField} className={styles.add}>+ Add New</span>
                <div className={styles.buttons}>
                <button className={styles.date}>Select Due Date</button>
                <div>
                <button className={styles.cancel}>Cancel</button>
                <button className={styles.save}>Save</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;

