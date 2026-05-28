import { Input } from "./Input";

interface DocumentInputGroupProps {
  label?: string;
  docType: string;
  docNumber: string;
  onDocTypeChange: (val: string) => void;
  onDocNumberChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

export function DocumentInputGroup({
  label = "Documento",
  docType,
  docNumber,
  onDocTypeChange,
  onDocNumberChange,
  placeholder = "Número de documento",
  error,
  className = "",
}: DocumentInputGroupProps) {
  return (
    <Input
      label={label}
      error={error}
      type="text"
      value={docNumber}
      onChange={(e) => onDocNumberChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      inputClassName="font-medium text-base text-brand-dark"
      leftElement={
        <div className="absolute left-px top-px bottom-px w-28 flex items-center border-r border-brand-border bg-transparent z-10">
          <select
            value={docType}
            onChange={(e) => onDocTypeChange(e.target.value)}
            className="w-full h-full pl-4 pr-8 text-base bg-transparent font-medium outline-none cursor-pointer text-brand-dark select-none appearance-none"
          >
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="CE">CE</option>
          </select>
          <div className="absolute right-3 pointer-events-none flex items-center text-brand-dark">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      }
    />
  );
}
