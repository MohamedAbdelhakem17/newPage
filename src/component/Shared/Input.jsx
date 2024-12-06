import PropTypes from 'prop-types'

const Input = ({ label, id, placeholder, children, type }) => {
    return (
        <div className="p-2 w-100 input-collections">
            <label htmlFor={id}>{label}</label>
            <div className="d-flex justify-content-center align-items-center input-container">
                {children}
                <input type={type} id={id} placeholder={placeholder} className="w-100 form-input" />
            </div>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired
}

export default Input