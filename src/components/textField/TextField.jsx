

import './TextField.css'

const TextField = (props) => {

    const newPlaceholder = `${props.placeholder}...`;

    const handleChange = (e) => {
        props.onChanged(e.target.value)
    };

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={handleChange} required={props.required} placeholder={newPlaceholder} />
        </div>
    )
}

export default TextField;