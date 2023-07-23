import React, { useState } from 'react';

export const Internship = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showConditional, setShowConditional] = useState(false);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);
        setShowConditional(selectedOption === 'Other');
    };

    return (
        <form>
            <label>Name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Phone Number</label>
            <input type="text" />

            <label>Select Option</label>
            <select name="options" onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduate"> Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Dropout">Dropout</option>
                <option value="Other">Other</option>
            </select>

            {showConditional && (
                <>
                    <label>Conditional Field 1</label>
                    <input type="text" />

                    <label>Conditional Field 2</label>
                    <input type="text" />
                </>
            )}

            <label>Resume</label>
            <input type="file" accept=".pdf,.doc,.docx"  />

            <button type="submit">Submit</button>
        </form>
    );
};