// ActivityDateTimePicker.js
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ActivityDateTimePicker({ show, date, mode, handleActivityDateInput }) {
  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={mode}
          is24Hour={true}
          onChange={handleActivityDateInput}
          display="inline"
        />
      )}
    </>
  );
}
