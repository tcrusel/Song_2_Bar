import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarPopUp.css";
import { fr } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import type { CalendarPopupProps } from "@/types/calendar";

registerLocale("fr", fr);

function CalendarPopup({ value, onChangeDate }: CalendarPopupProps) {
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
            selected={value}
            onChange={onChangeDate}
            inline
            calendarStartDay={1}
            locale="fr"
          />
        </div>
      )}
    </div>
  );
}

export default CalendarPopup;
