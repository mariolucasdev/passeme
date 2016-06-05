import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import VisibleLoginList from '../VisibleLoginList';
import styles from './styles.css';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <AppBar title="passeme"></AppBar>

        <div className={styles.container}>
          <div className={styles.loginList}>
            <VisibleLoginList></VisibleLoginList>
            <div className={styles.createButton}>
              <Link to="/createLogin" >
                <FloatingActionButton>
                  <ContentAdd />
                </FloatingActionButton>
              </Link>
            </div>
          </div>
          <div className={styles.viewContainer}>
            {this.props.children}
            {
              (() => {
                if (process.env.NODE_ENV !== 'production') {
                  const DevTools = require('../DevTools');
                  return <DevTools />;
                }
              })()
            }
          </div>
        </div>

      </div>
    );
  }
}
