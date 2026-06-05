import React from 'react';

export default function QuestionCard({ question, value, onChange }) {
  const { id, title, type, options, hasOther, placeholder } = question;

  // Helper to check if an option is selected
  const isSelected = (opt) => {
    if (type === 'radio') return value === opt;
    if (type === 'checkbox') return Array.isArray(value) && value.includes(opt);
    return false;
  };

  const isOtherSelected = () => {
    if (!hasOther) return false;
    if (type === 'radio') {
      return value && !options.includes(value);
    }
    if (type === 'checkbox') {
      return Array.isArray(value) && value.some(v => !options.includes(v));
    }
    return false;
  };

  const getOtherValue = () => {
    if (!isOtherSelected()) return '';
    if (type === 'radio') return value;
    if (type === 'checkbox') return value.find(v => !options.includes(v));
    return '';
  };

  const handleOptionChange = (e, opt) => {
    if (type === 'radio') {
      onChange(id, opt);
    } else if (type === 'checkbox') {
      const checked = e.target.checked;
      let newValue = Array.isArray(value) ? [...value] : [];
      
      // Remove any existing "Other" value if selecting a standard option and it was an exclusive select? 
      // Checkboxes are multi-select, so we just add/remove.
      if (checked) {
        newValue.push(opt);
      } else {
        newValue = newValue.filter(v => v !== opt);
      }
      onChange(id, newValue);
    }
  };

  const handleOtherRadioChange = () => {
    // Select other, default to generic string if empty
    onChange(id, getOtherValue() || '其他');
  };

  const handleOtherCheckboxChange = (e) => {
    const checked = e.target.checked;
    let newValue = Array.isArray(value) ? [...value] : [];
    if (checked) {
      newValue.push('其他'); // placeholder
    } else {
      // remove whatever the other value is
      const otherVal = getOtherValue();
      if (otherVal) {
        newValue = newValue.filter(v => v !== otherVal);
      } else {
        newValue = newValue.filter(v => v !== '其他');
      }
    }
    onChange(id, newValue);
  };

  const handleOtherTextChange = (e) => {
    const text = e.target.value;
    if (type === 'radio') {
      onChange(id, text);
    } else if (type === 'checkbox') {
      let newValue = Array.isArray(value) ? [...value] : [];
      const otherVal = getOtherValue() || '其他';
      const index = newValue.indexOf(otherVal);
      if (index > -1) {
        newValue[index] = text;
      } else {
        newValue.push(text);
      }
      onChange(id, newValue);
    }
  };

  const handleTextareaChange = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <div className="glass-card">
      <h2 className="question-title">{title}</h2>
      
      {type === 'text' ? (
        <textarea
          className="text-input"
          placeholder={placeholder || "請輸入..."}
          value={value || ''}
          onChange={handleTextareaChange}
        />
      ) : (
        <div className="options-container">
          {options && options.map((opt, idx) => (
            <label key={idx} className={`option-label ${isSelected(opt) ? 'selected' : ''}`}>
              <input
                type={type}
                className="option-input"
                name={id}
                value={opt}
                checked={isSelected(opt)}
                onChange={(e) => handleOptionChange(e, opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
          
          {hasOther && (
            <label className={`option-label ${isOtherSelected() ? 'selected' : ''}`}>
              <input
                type={type}
                className="option-input"
                name={id}
                checked={isOtherSelected()}
                onChange={type === 'radio' ? handleOtherRadioChange : handleOtherCheckboxChange}
              />
              <span>其他</span>
              {isOtherSelected() && (
                <input
                  type="text"
                  className="text-input"
                  style={{ marginLeft: '10px', marginTop: 0, padding: '0.4rem 0.8rem', width: 'auto', flex: 1 }}
                  value={getOtherValue() === '其他' ? '' : getOtherValue()}
                  onChange={handleOtherTextChange}
                  placeholder="請註明"
                  autoFocus
                />
              )}
            </label>
          )}
        </div>
      )}
    </div>
  );
}
