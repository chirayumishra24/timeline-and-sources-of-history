import React, { useState } from 'react';
import { OrderingQuestion, OrderingItem } from '@/types/question';
import { ChevronUp, ChevronDown, ArrowUpDown, Check } from 'lucide-react';

interface OrderingViewProps {
  question: OrderingQuestion;
  onSubmitAnswer: (orderedIds: string[]) => void;
  disabled?: boolean;
}

export const OrderingView: React.FC<OrderingViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [items, setItems] = useState<OrderingItem[]>(() => [...question.items]);

  // Move an item up in chronological order
  const moveUp = (index: number) => {
    if (index <= 0 || disabled) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  // Move an item down in chronological order
  const moveDown = (index: number) => {
    if (index >= items.length - 1 || disabled) return;
    const newItems = [...items];
    [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    setItems(newItems);
  };

  // Move directly to a specific numerical slot
  const moveToSlot = (fromIndex: number, toSlot1Indexed: number) => {
    const toIndex = toSlot1Indexed - 1;
    if (toIndex < 0 || toIndex >= items.length || fromIndex === toIndex || disabled) return;
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  const handleSubmit = () => {
    if (disabled) return;
    onSubmitAnswer(items.map(it => it.id));
  };

  return (
    <div className="w-full flex flex-col space-y-2.5">
      {/* Prompt Header */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3 sm:p-3.5 shadow-xs">
        <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-1">
          <ArrowUpDown className="w-3.5 h-3.5 text-amber-600" />
          <span>Chronological Ordering Challenge</span>
        </div>
        <h3 className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-[11px] font-semibold text-stone-500 mt-1 bg-stone-50 inline-block px-2.5 py-0.5 rounded-lg border border-stone-200">
          Order Direction: {question.directionLabel || "Earliest (Past) → Latest (Recent)"}
        </p>
      </div>

      {/* Interactive Ordered Cards */}
      <div className="space-y-1.5">
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border-2 border-stone-200 hover:border-amber-400 p-2.5 sm:p-3 transition-all shadow-xs flex flex-row items-center justify-between gap-2"
            >
              {/* Left Rank Indicator + Content */}
              <div className="flex items-center space-x-2.5 flex-1 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 font-serif font-bold text-xs flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-800 truncate">
                    {item.label}
                  </h4>
                  {item.detail && (
                    <p className="text-[11px] text-stone-500 truncate">{item.detail}</p>
                  )}
                </div>
              </div>

              {/* Accessible Controls: Up/Down Buttons & Slot Selector */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <select
                  value={index + 1}
                  onChange={(e) => moveToSlot(index, parseInt(e.target.value))}
                  disabled={disabled}
                  className="bg-stone-50 border border-stone-300 rounded-md px-1.5 py-0.5 text-xs font-bold text-stone-700 cursor-pointer focus:outline-none"
                  aria-label={`Position for ${item.label}`}
                >
                  {items.map((_, i) => (
                    <option key={i} value={i + 1}>
                      #{i + 1}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => moveUp(index)}
                  disabled={index === 0 || disabled}
                  className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move Up"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => moveDown(index)}
                  disabled={index === items.length - 1 || disabled}
                  className="p-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move Down"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={disabled}
          className={`px-6 py-2 rounded-xl font-serif font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
            !disabled
              ? 'bg-[#2B4C7E] hover:bg-[#1E3557] text-white hover:scale-105 active:scale-95 cursor-pointer'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};
