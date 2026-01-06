import { useState, useMemo, useCallback } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function Card() {
  const [amount, setAmount] = useState<number | "">("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState<number | "">("");

  const currencyInfo = useCurrencyInfo(from);

  const options = useMemo(() => Object.keys(currencyInfo), [currencyInfo]);

  const swap = useCallback(() => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }, [from, to, amount, convertedAmount]);

  const convert = useCallback(() => {
    if (currencyInfo[to] && amount !== "") {
      const result = Number(amount) * currencyInfo[to];
      setConvertedAmount(parseFloat(result.toFixed(2)));
    } else {
      setConvertedAmount("");
    }
  }, [amount, currencyInfo, to]);

  const reset = useCallback(() => {
    setAmount("");
    setConvertedAmount("");
    setFrom("usd");
    setTo("inr");
  }, []);

  const currentRate = currencyInfo[to] || 0;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-slate-800">Currency Exchange</h1>
            <button 
              onClick={reset}
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              Reset
            </button>
          </div>

          <div className="space-y-2 relative">

            <div className="bg-slate-50 p-5 rounded-2xl hover:bg-slate-100 transition-colors focus-within:ring-2 focus-within:ring-blue-500/20 group">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="from-amount" className="text-slate-500 text-sm font-medium">From</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  id="from-amount"
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    setAmount(val === "" ? "" : Number(val));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') convert();
                  }}
                  placeholder="0"
                  className="w-full bg-transparent text-4xl font-semibold text-slate-900 placeholder-slate-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <div className="relative shrink-0">
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="appearance-none bg-white shadow-sm border border-slate-200 text-slate-700 font-bold py-2 px-3 pr-8 rounded-xl cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 uppercase transition-all text-sm w-24"
                  >
                    {options.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">

              <button
                onClick={swap}
                className="bg-white border text-blue-600 border-slate-200 p-2.5 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 hover:border-blue-100 active:scale-95 transition-all duration-200"
                title="Swap currencies"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              </button>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl hover:bg-slate-100 transition-colors focus-within:ring-2 focus-within:ring-blue-500/20">

              <div className="flex justify-between items-center mb-2">
                <label className="text-slate-500 text-sm font-medium">To</label>
              </div>
              <div className="flex items-center gap-4">
                 <input
                  type="text"
                  value={convertedAmount}
                  readOnly
                  placeholder="0.00"
                  className="w-full bg-transparent text-4xl font-semibold text-slate-900 placeholder-slate-300 focus:outline-none"
                />
                <div className="relative shrink-0">
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="appearance-none bg-white shadow-sm border border-slate-200 text-slate-700 font-bold py-2 px-3 pr-8 rounded-xl cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 uppercase transition-all text-sm w-24"
                  >
                    {options.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center text-xs text-slate-500 mb-4 px-1">
              <span>Mid-market exchange rate</span>
              {amount !== "" && currentRate > 0 && (
                <span className="font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                   1 {from.toUpperCase()} = {currentRate.toFixed(4)} {to.toUpperCase()}
                </span>
              )}
            </div>
            
            <button
              onClick={convert}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200"
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
