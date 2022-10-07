import './DropDownList.css'

const DropDownList = (props) => {

    return (
        <div className='drop-down-list'>
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} required={props.required} value={props.value}>
                <option value="">Escolha uma opção</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList;