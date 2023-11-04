import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

function MyDatePicker() {
  const [selectedDate, handleDateChange] = useState<Date | null>(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {' '}
      <DatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Select Date"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={(date: MaterialUiPickersDate) => handleDateChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
}

export default MyDatePicker;
