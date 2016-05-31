import React, { Component } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { Link } from 'react-router';
import styles from './styles.css';
import Key from 'material-ui/lib/svg-icons/communication/vpn-key';

export default class LoginList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Logins</h2>
          <List>
            {
              this.props.logins.map((login) => {
                let loginLink = "/viewLogin/" + login.id;
                return <Link to={loginLink} key={login.id} className={styles.link}>
                          <ListItem
                            primaryText={login.site}
                            leftIcon={<Key />}
                             />
                       </Link>
              })
            }
          </List>
      </div>
    );
  }
}
