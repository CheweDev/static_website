export default function CustomInput({
  label,
  type = "text",
  name,
  placeholder,
  options = [],
  rows,
  required = false,
  onChange,
}) {
  const baseClass =
    "w-full px-4 py-3 border border-gray-300 btn-rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && "*"}
        </label>
      )}

      {type === "select" ? (
        <select
          className={baseClass}
          onChange={(e) => onChange(name, e.target.value)}
        >
          <option value="">Select {label?.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          rows={rows || 4}
          className={`${baseClass} resize-none`}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
        />
      ) : (
        <input
          type={type}
          required={required}
          className={baseClass}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
        />
      )}
    </div>
  );
}
