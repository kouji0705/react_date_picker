import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

function MyDatePicker() {
  const [selectedDate, handleDateChange] = useState<Date | null>(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="日付選択"
        format="yyyy/MM/dd"
        value={selectedDate}
        onChange={(date: MaterialUiPickersDate) => handleDateChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
}

export default MyDatePicker;
