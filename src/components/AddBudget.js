import React, {useState} from 'react'

const AddBudget = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div className="add-budget">
            <h3>Add New Budget Category</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Budget category</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter budget category..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="add-btn">Add Budget</button>
            </form>
        </div>
    )
}

export default AddBudget
