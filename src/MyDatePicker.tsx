import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function MyDatePicker() {
  const [selectedDate, handleDateChange] = useState(null);

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
        // onChange={handleDateChange}
        onChange={() => {
          console.log('handleDateChange');
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default MyDatePicker;
