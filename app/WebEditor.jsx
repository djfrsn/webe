import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './WebEditor.css';

const cx = classNames.bind(styles);

export default class WebEditor extends Component {
  render() {
    return (<div>
        <section className={cx('webeditor')}>
        hello
        </section>
      </div>);
  }
}

WebEditor.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};
