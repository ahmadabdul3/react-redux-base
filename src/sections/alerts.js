import React, { Component } from 'react';

export default class Alerts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { alerts, removeAlert } = this.props;
    return (
      <div className='alerts'>
        {
          alerts.map((alert, key) => {
            return <Alert alert={alert} key={key} removeAlert={removeAlert} />
          })
        }
      </div>
    );
  }
}

class Alert extends Component {
  constructor(props) {
    super(props);

    this.removeAlertTimeoutId = setTimeout(() => {
      this.props.removeAlert(props.alert.id);
    }, 6000);
  }

  getAlertMarkup() {
    const { alert } = this.props;
    const { data } = alert;
    switch (data.type) {
      case 'scheduledActivity':
        return <ScheduledActivityAlert data={data} />;

      case 'success':
        return <SuccessActivityAlert data={data} />

      default:
        return <TextAlert data={data} />;
    }
  }

  removeAlert = () => {
    clearTimeout(this.removeAlertTimeoutId);
    this.props.removeAlert(this.props.alert.id);
  }

  render() {
    const { alert } = this.props;

    return (
      <div className='alert' onClick={this.removeAlert}>
        { this.getAlertMarkup() }
      </div>
    );
  }
}

function TextAlert({ data }) {
  return (
    <div className=''>
      <i className='fa fa-info-circle info-icon' aria-hidden='true' />
      { data.text }
    </div>
  );
}

function SuccessActivityAlert({ data }) {
  return (
    <div className='alert-success'>
      <i className='fa fa-check info-icon' aria-hidden='true' />
      { data.text }
    </div>
  )
}

function ScheduledActivityAlert({ data }) {
  const { event, activity, day, fromTime, toTime } = data;
  const message = ', ' + day + ' ' + fromTime.hour + ' ' + fromTime.periodOfDay;

  return (
    <div className='scheduled-activity-alert'>
      <i className='fa fa-calendar info-icon' aria-hidden='true' />
      <span className='event'>{ event }</span>
      <div className='activity-details'>
        <span className='activity'>{activity}</span>{ message }
      </div>
    </div>
  );
}
