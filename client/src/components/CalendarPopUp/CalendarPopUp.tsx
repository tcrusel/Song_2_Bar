import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPopUp.css";

function CalendarPopUp() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="calendar-wrapper">
      <button
        type="button"
        className="date-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        QUAND ?
      </button>

      {isOpen && (
        <div className="calendar-modal">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            inline
            calendarStartDay={1}
            locale="fr"
          />
          <div className="calendar-actions">
            <button
              type="button"
              className="btn-validate"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              VALIDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPopUp;
