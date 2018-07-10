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
        currentDate: new Date()
    };

    datepicker = React.createRef();

    handleDateChange = (e, date) => {
        this.setState({
            currentDate: new Date(date.getTime() + halfDayInMs)
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

    print = () => {
        window.print();
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

                <div className="wrapper">
                    <div className="two-weeks-button">
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
                            <div className="two-weeks-label">2 weeks</div>
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
                        <div className="row">
                            <button
                                className="print-button"
                                onClick={this.print}
                            >
                                Print
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </button>
                        </div>
                    </div>

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
