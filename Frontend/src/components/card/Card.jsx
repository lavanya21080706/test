import { useState ,useEffect} from 'react';
import styles from './Card.module.css';
import dots from '../../assets/images/dots.png';
import down from '../../assets/images/down.png';
import up from '../../assets/images/up.png';

function Card({ priority, title, checklistItems, dueDate, vp, onMoveToBacklog, onMoveToInProgress, onMoveToDone, updateChecklist }) {
    const formattedDueDate = dueDate ? formatDate(dueDate) : null;
    const [showChecklist, setShowChecklist] = useState(false);
    const [arrowImage, setArrowImage] = useState(down);
    const [checkedCount, setCheckedCount] = useState(0); // State to keep track of checked checkboxes count

    useEffect(() => {
        let initialCheckedCount = 0;
        checklistItems.forEach(item => {
            if (vp.includes(item)) {
                initialCheckedCount++;
            }
        });
        setCheckedCount(initialCheckedCount);
    }, [checklistItems, vp]);

    const toggleChecklist = () => {
        setShowChecklist(!showChecklist);
        setArrowImage(showChecklist ? down : up);
    };

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        const checkboxes = document.getElementsByClassName(styles.checkBox);
        let updatedCount = 0;
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                updatedCount++;
            }
        }
        setCheckedCount(updatedCount);
        updateChecklist(updatedCount); // Update checklist count in parent component
    };

  
    function formatDate(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate();
        let daySuffix;

        if (day === 1 || day === 21 || day === 31) {
            daySuffix = 'st';
        } else if (day === 2 || day === 22) {
            daySuffix = 'nd';
        } else if (day === 3 || day === 23) {
            daySuffix = 'rd';
        } else {
            daySuffix = 'th';
        }

        return `${months[date.getMonth()]} ${day}${daySuffix}`;
    }

    let colorClass;
    switch (priority.toLowerCase()) {
        case 'high':
            colorClass = styles.highPriorityColor;
            break;
        case 'moderate':
            colorClass = styles.moderatePriorityColor;
            break;
        case 'low':
            colorClass = styles.lowPriorityColor;
            break;
        default:
            colorClass = '';
    }

    // Determine if the due date has passed
    const isDueDatePassed = dueDate ? dueDate < new Date() : false;

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={`${styles.color} ${colorClass}`}></div>
                <span className={styles.priority}>{priority.toUpperCase()} PRIORITY</span>
                <img src={dots} alt='dots_icon' className={styles.dots} />
            </div>
            <span className={styles.title}>{title}</span>
            <div className={styles.checklist}>
                <div className={styles.arrow}>
                    <p className={styles.checklistTitle}>Checklist ({checkedCount}/{checklistItems.length})</p>
                    <div>
                        <img src={arrowImage} alt='down_arrow_icon' className={styles.down} onClick={toggleChecklist} />
                    </div>
                </div>
                {showChecklist && (
                    <div className={styles.checklistItems}>
                        {checklistItems.map((item, index) => {
                            // Check if the item exists in the vp array
                            const isChecked = vp.includes(item);
                            return (
                                <div key={index} className={styles.inputfieldsBox}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkBox}
                                        id={`checkbox-${index}`} // Unique identifier for each checkbox
                                        onChange={() => handleCheckboxChange(index)} // Handle checkbox change
                                        {...(isChecked && { checked: true })} // Conditionally add checked attribute
                                    />
                                    <input
                                        type='text'
                                        value={item}
                                        className={styles.input}
                                    />
                                </div>
                            );
                        })}

                    </div>
                )}
            </div>
            <div className={styles.cardFooter}>
                {formattedDueDate && (
                    <button className={`${styles.dueDate} ${isDueDatePassed ? styles.dueDateRed : ''}`}>
                        {formattedDueDate}
                    </button>
                )}
                <div className={styles.sectionButtons}>
                    <button onClick={onMoveToBacklog} className={styles.backlog}>Backlog</button>
                    <button onClick={onMoveToInProgress} className={styles.inProgress}>Progress</button>
                    <button onClick={onMoveToDone} className={styles.done}>Done</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
