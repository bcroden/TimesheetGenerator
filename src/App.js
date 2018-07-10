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
    state = {
        currentDate: new Date(),
        isDefaultDate: true
    };

    datepicker = React.createRef();

    handleDateChange = (e, date) => {
        this.setState({
            currentDate: new Date(date.getTime() + halfDayInMs),
            isDefaultDate: false
        });
    };

    subTwoWeeks = () => {
        this.setState(state => {
            return {
                currentDate: new Date(
                    state.currentDate.getTime() - 14 * oneDayInMs
                )
            };
        });
    };
    addTwoWeeks = () => {
        this.setState(state => {
            return {
                currentDate: new Date(
                    state.currentDate.getTime() + 14 * oneDayInMs
                )
            };
        });
    };

    handleDayClick = () => {
        if (this.datepicker.current) {
            this.datepicker.current.openDialog();
        }
    };

    render() {
        const { currentDate, isDefaultDate } = this.state;

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

                <div className="wrapper">
                    {!isDefaultDate && (
                        <div className="two-weeks-button">
                            <div>2 weeks</div>
                            <div className="row">
                                <button onClick={this.subTwoWeeks}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 13H5v-2h14v2z" />
                                        <path d="M0 0h24v24H0z" fill="none" />
                                    </svg>
                                </button>
                                <button onClick={this.addTwoWeeks}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                        <path d="M0 0h24v24H0z" fill="none" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}

                    <Timesheet
                        currentDate={currentDate}
                        onDayClick={this.handleDayClick}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
