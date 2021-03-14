import React, { Component } from 'react';
import { Container, Button, Menu } from 'semantic-ui-react';
import Head from 'next/head';
import DataFeed from '../components/datafeed-page';
import BMR from '../components/bmr-page';
import { Link } from '../routes';

class MoonLink extends Component {
   // Nextjs uses this function to render this first server-side
   static async getInitialProps() {
      return {};
   }

   state = {
      account: 'Not Connected',
   };

   async componentDidMount() {}

   onConnect = async () => {
      const accounts = await ethereum.request({
         method: 'eth_requestAccounts',
      });

      if (accounts) {
         this.setState(() => {
            return { account: accounts[0] };
         });
      }
   };

   render() {
      return (
         <Container>
            <Head>
               <link
                  rel='stylesheet'
                  href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
               />
            </Head>
            <Menu style={{ marginTop: '10px' }}>
               <Link route='/'>
                  <a className='item'>MoonLink Oracle Dashboard</a>
               </Link>
               <Menu.Menu position='right'>
                  <a className='item'> {this.state.account} </a>
                  <Button
                     floated='right'
                     content='Connect MetaMask'
                     icon='plus square'
                     primary
                     onClick={this.onConnect}
                  />
               </Menu.Menu>
            </Menu>
            <br />
            <DataFeed />
            <br />
            <hr />
            <br />
            <BMR account={this.state.account} />
         </Container>
      );
   }
}

export default MoonLink;
