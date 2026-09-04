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
    <div className="w-full flex flex-col space-y-6">
      {/* Prompt Header */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
          <ArrowUpDown className="w-4 h-4 text-amber-600" />
          <span>Chronological Ordering Challenge</span>
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-xs font-semibold text-stone-500 mt-2 bg-stone-50 inline-block px-3 py-1 rounded-lg border border-stone-200">
          Order Direction: {question.directionLabel || "Earliest (Past) → Latest (Recent)"}
        </p>
      </div>

      {/* Interactive Ordered Cards */}
      <div className="space-y-3">
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-stone-200 hover:border-amber-400 p-4 transition-all shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              {/* Left Rank Indicator + Content */}
              <div className="flex items-center space-x-3.5 w-full sm:w-auto">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-serif font-bold text-base flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-stone-800">
                    {item.label}
                  </h4>
                  {item.detail && (
                    <p className="text-xs text-stone-500 mt-0.5">{item.detail}</p>
                  )}
                </div>
              </div>

              {/* Accessible Controls: Up/Down Buttons & Slot Selector */}
              <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
                {/* Number selector */}
                <div className="flex items-center space-x-1 mr-2 text-xs text-stone-500">
                  <span className="hidden sm:inline">Slot:</span>
                  <select
                    value={index + 1}
                    onChange={(e) => moveToSlot(index, parseInt(e.target.value))}
                    disabled={disabled}
                    className="bg-stone-50 border border-stone-300 rounded-lg px-2 py-1 text-xs font-bold text-stone-700 cursor-pointer focus:outline-none focus:border-amber-500"
                    aria-label={`Position for ${item.label}`}
                  >
                    {items.map((_, i) => (
                      <option key={i} value={i + 1}>
                        #{i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => moveUp(index)}
                  disabled={index === 0 || disabled}
                  className={`p-2 rounded-xl border text-stone-700 transition-colors ${
                    index === 0 || disabled
                      ? 'bg-stone-100 border-stone-200 text-stone-300 cursor-not-allowed'
                      : 'bg-stone-50 hover:bg-amber-100 border-stone-300 hover:border-amber-400 cursor-pointer'
                  }`}
                  title="Move Earlier in Time (Up)"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <button
                  onClick={() => moveDown(index)}
                  disabled={index === items.length - 1 || disabled}
                  className={`p-2 rounded-xl border text-stone-700 transition-colors ${
                    index === items.length - 1 || disabled
                      ? 'bg-stone-100 border-stone-200 text-stone-300 cursor-not-allowed'
                      : 'bg-stone-50 hover:bg-amber-100 border-stone-300 hover:border-amber-400 cursor-pointer'
                  }`}
                  title="Move Later in Time (Down)"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Confirm Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="px-8 py-3 rounded-2xl font-serif font-bold text-base tracking-wider bg-[#2B4C7E] hover:bg-[#1E3557] text-white transition-all shadow-md hover:scale-105 active:scale-95 flex items-center space-x-2"
        >
          <Check className="w-5 h-5" />
          <span>CONFIRM TIMELINE SEQUENCE</span>
        </button>
      </div>
    </div>
  );
};
