import { addDays, format, isSameDay, startOfWeek } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import "./HorizontalCalendar.css";
import { FaRegCalendarAlt } from "react-icons/fa";

type HorizontalCalendarProps = {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onToggleCalendar: () => void;
};

function HorizontalCalendar({
  selectedDate,
  onSelectDate,
  onToggleCalendar,
}: HorizontalCalendarProps) {
  const [weekStart, setWeekStart] = useState<Date>(
    startOfWeek(selectedDate || new Date(), { weekStartsOn: 1 }),
  );

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  return (
    <div className="calendar-container">
      <button
        type="button"
        onClick={() => setWeekStart(addDays(weekStart, -7))}
      />
      <button
        type="button"
        className="calendar-icon-button"
        onClick={onToggleCalendar}
      >
        <FaRegCalendarAlt size={20} />
      </button>

      {daysOfWeek.map((day) => (
        <button
          type="button"
          key={day.toDateString()}
          className={`day-button ${selectedDate && isSameDay(day, selectedDate) ? "active" : ""}`}
          onClick={() => onSelectDate(day)}
        >
          <div>{format(day, "EEE", { locale: fr })}</div>
          <div>{format(day, "dd")}</div>
        </button>
      ))}

      <button
        type="button"
        onClick={() => setWeekStart(addDays(weekStart, 7))}
      />
    </div>
  );
}

export default HorizontalCalendar;
