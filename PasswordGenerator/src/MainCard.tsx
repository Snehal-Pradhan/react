import { useCallback, useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

export default function MainCard() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState("");
  const [copyButtonState, setCopyButtonState] = useState<"copy" | "copied">(
    "copy"
  );

  const generatePassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSpecial) chars += "!@#$%^&*()";

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(result);
  }, [length, includeNumbers, includeSpecial]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopyButtonState("copied");
    setTimeout(() => setCopyButtonState("copy"), 2000);
  };

  return (
    <div className="max-w-md w-full rounded-2xl bg-white shadow-lg border border-slate-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-slate-800">
          Password Generator
        </h1>
        <p className="text-sm text-slate-500">
          Generate a secure password instantly
        </p>
      </div>

      <div className="px-6 py-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            Password Length
          </span>
          <span className="text-2xl font-bold text-slate-900">{length}</span>
        </div>
        <input
          type="range"
          min={8}
          max={40}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full cursor-pointer accent-slate-800"
        />
      </div>

      <div className="px-6 py-4 space-y-3">
        <label className="flex items-center justify-between text-sm text-slate-700">
          <span>Include Numbers</span>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((v) => !v)}
            className="h-4 w-4"
          />
        </label>

        <label className="flex items-center justify-between text-sm text-slate-700">
          <span>Include Special Characters</span>
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial((v) => !v)}
            className="h-4 w-4"
          />
        </label>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-slate-50 rounded-b-2xl flex gap-2 items-center">
        <input
          type="text"
          readOnly
          value={password}
          className="flex-1 rounded-md border px-3 py-2 text-sm text-slate-700 bg-white"
        />
        <div className="relative group">
          <button
            onClick={handleCopy}
            aria-label="Copy password"
            className="rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700 transition"
          >
            {copyButtonState === "copied" ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}
          </button>

          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            {copyButtonState === "copied" ? "Copied" : "Copy"}
          </span>
        </div>
      </div>
    </div>
  );
}
