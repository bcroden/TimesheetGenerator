import React from 'react';

import DatePicker from 'material-ui/DatePicker';
import Helmet from 'react-helmet';

import './index.css';

import Timesheet from './Timesheet';

const oneDayInMs = 1000 * 60 * 60 * 24;
const halfDayInMs = oneDayInMs / 2;

const formatDate = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

class App extends React.Component {
    state = { currentDate: new Date() };

    datepicker = React.createRef();

    handleDateChange = (e, date) => {
        this.setState({
            currentDate: new Date(date.getTime() + halfDayInMs)
        });
    };

    handleDayClick = () => {
        if (this.datepicker.current) {
            this.datepicker.current.openDialog();
        }
    };

    render() {
        const { currentDate } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>Timesheet {formatDate.format(currentDate)}</title>
                </Helmet>

                <DatePicker
                    ref={this.datepicker}
                    className="datepicker"
                    firstDayOfWeek={0}
                    hintText="Select Date"
                    onChange={this.handleDateChange}
                    value={currentDate}
                />

                <Timesheet
                    currentDate={currentDate}
                    onDayClick={this.handleDayClick}
                />
            </React.Fragment>
        );
    }
}

export default App;
