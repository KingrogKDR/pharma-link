import PropTypes from 'prop-types'

function FormField({ placeholder }) {
  return (
    <div>
      <label>
        <input type="text" 
            placeholder={placeholder}
            className='w-full h-[100px] px-4 py-2 border-2 rounded-xl'
        />
      </label>
    </div>
  )
}

FormField.propTypes = {
    placeholder: PropTypes.string
}

export default FormField
