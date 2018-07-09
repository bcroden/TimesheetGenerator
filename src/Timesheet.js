import React from 'react';

import range from 'ramda/src/range';
import last from 'ramda/src/last';

import './index.css';

const formatDate = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});

const formatDay = new Intl.DateTimeFormat(undefined, {
    weekday: 'short'
});

function createDatesArray(date) {
    const time = date.getTime();
    const dayInMs = 1000 * 60 * 60 * 24;

    return range(0, 14).map(i => new Date(time + dayInMs * i));
}

const Timesheet = ({ currentDate, onDayClick }) => {
    const dates = createDatesArray(currentDate);

    return (
        <div id="container">
            <table className="header">
                <tbody>
                    <tr>
                        <td>
                            <h1>City of Huntsville Police</h1>
                            <span>
                                Officer: _______________________________
                            </span>
                        </td>
                        <td>
                            <h1>Biweekly Time Sheet</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>Pay period start date:</span>
                                        </td>
                                        <td className="underline">
                                            <span
                                                className="clickable-field"
                                                onClick={onDayClick}
                                            >
                                                {formatDate.format(currentDate)}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Pay period end date:</span>
                                        </td>
                                        <td className="underline">
                                            <span>
                                                {formatDate.format(last(dates))}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="data">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Date</th>
                        <th>
                            Regular<br />Hours
                        </th>
                        <th>
                            Overtime<br />Hours
                        </th>
                        <th>
                            Sick<br />Hours
                        </th>
                        <th>
                            Vacation<br />Hours
                        </th>
                        <th>
                            Comp.<br />Hours
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dates.map(date => (
                        <tr key={formatDate.format(date)}>
                            <td>{formatDay.format(date)}.</td>
                            <td>{formatDate.format(date)}</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <table className="fields">
                <tbody>
                    <tr>
                        <td>Comp. hours due</td>
                        <td>_______</td>
                        <td>Sick hours due</td>
                        <td>_______</td>
                        <td>Vacation hours due</td>
                        <td>_______</td>
                    </tr>
                    <tr>
                        <td>Comp. hours accrued</td>
                        <td>_______</td>
                        <td>Sick hours accrued</td>
                        <td>_______</td>
                        <td>Vacation hours accrued</td>
                        <td>_______</td>
                    </tr>
                    <tr>
                        <td>Comp. hours taken</td>
                        <td>_______</td>
                        <td>Sick hours taken</td>
                        <td>_______</td>
                        <td>Vacation hours taken</td>
                        <td>_______</td>
                    </tr>
                    <tr>
                        <td>Comp. hours balance</td>
                        <td>_______</td>
                        <td>Sick hours balance</td>
                        <td>_______</td>
                        <td>Vacation hours balance</td>
                        <td>_______</td>
                    </tr>
                    <tr className="overtimeRow">
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>Overtime hours</td>
                        <td>_______</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <table className="signatures">
                <tbody>
                    <tr>
                        <td>
                            <h3>Officer's Signature</h3>
                        </td>
                        <td>_______________________________</td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Supvervisor's Signature</h3>
                        </td>
                        <td>_______________________________</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Timesheet;
