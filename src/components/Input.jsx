import PropTypes from "prop-types";

export default function Input({ label, placeholder, value }) {
  return (
    <div>
      <label htmlFor={label} className="block text-xs font-medium text-gray-700">
        {label}
      </label>

      <input type="text" id={label} placeholder={placeholder} className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" value={value} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
