import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPopup.css";

function CalendarPopup() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleValidate = () => {
    console.log("Date validée :", selectedDate);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setSelectedDate(null);
    setIsOpen(false);
  };

  return (
    <div className="calendar-wrapper">
      <button
        type="button"
        className="date-button"
        onClick={() => setIsOpen(true)}
      >
        QUAND ?
      </button>

      {isOpen && (
        <div className="calendar-modal">
          <h3 className="calendar-title">Pop up Calendar</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            inline
            calendarStartDay={1}
            locale="fr"
          />
          <div className="calendar-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              ANNULER
            </button>
            <button
              type="button"
              className="btn-validate"
              onClick={handleValidate}
            >
              VALIDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPopup;
