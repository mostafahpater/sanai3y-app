import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
import axios from 'axios'
import WebView from 'react-native-webview'

export default class Paypal extends Component {

    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null
    }

    componentDidMount() {


        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": '150',
                    "currency": "USD",
                    "details": {
                        "subtotal": '150',
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    }
                }

            }],
            "redirect_urls": {
                "return_url": "https://www.sandbox.paypal.com/checkoutnow?sessionID=uid_f7130461ec_mtc6nta6ndi&buttonSessionID=uid_1a27f9388e_mtc6nti6mjk&stickinessID=uid_d4c4ff1255_mti6mjg6mdu&inlinexo=false&smokeHash=&token=63F3771594008344H&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=true&clientID=AZ51PWvV2V_ij5HDO2ivSJYUHukBhsoQwm6NulX6ZjIzMiLkdosGhpxefln8kfwraTqWXt9WjBkKFK4t&env=sandbox&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QVo1MVBXdlYyVl9pajVIRE8yaXZTSllVSHVrQmhzb1F3bTZOdWxYNlpqSXpNaUxrZG9zR2hweGVmbG44a2Z3cmFUcVdYdDlXakJrS0ZLNHQiLCJhdHRycyI6eyJkYXRhLXNkay1pbnRlZ3JhdGlvbi1zb3VyY2UiOiJyZWFjdC1wYXlwYWwtanMiLCJkYXRhLXVpZCI6InVpZF96aGp6cnBkdGF1Z2FsdHhyZG5kZnVnd2VvY3F1eHIifX0&xcomponent=1&version=5.0.343",
                "cancel_url": "https://example.com"
            }
        }

        fetch('https://api.sandbox.paypal.com/v1/oauth2/token',
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer A21AAK5qxI5pUj-kAgQUtZXuqr0g2wMycwcJMjnjent2bJnjiswRQyrByyGiXRG1ZheNgcOHMRIoJzEq4KLWZw94S0Vo7uVRA` // Your authorization value

                },
                body:  'grant_type=client_credentials'
            }
        )
            .then(res => res.json())
            .then(response => {

                // console.log('response====', response);
                    this.setState({
                         accessToken: response.access_token,
                    })

                    fetch('https://api-m.sandbox.paypal.com/v1/payments/payment',
                    {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${response.access_token}`
                        },
                        body: JSON.stringify(dataDetail)
                    }
                    )
                    .then(res => res.json())
                    .then(response => {
                        // console.log('response', response);
                        const { id, links } = response
                        const approvalUrl = links.find(data => data.rel == "approval_url")
                        // console.log('approvalUrl', approvalUrl);
                        this.setState({
                            paymentId: id,
                            approvalUrl: approvalUrl.href
                        })

                    }).catch(err => {
                        // console.log({...err})
                    })
            }).catch(err => {
                // console.log({...err})

            })
    }

    _onNavigationStateChange = (webViewState) => {

        if (webViewState.url.includes('https://example.com/')) {

            this.setState({
                approvalUrl: null
            })

            const { PayerID, paymentId } = webViewState.url

            fetch(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,{
                method:'POST',
                body: {payer_id: PayerID},
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.state.accessToken}`
                    }
            })
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                    if(response.name === 'INVALID_RESOURCE_ID') {
                        alert('paymanet fild')
                        this.setState({
                            approvalUrl: null
                        })
                        this.props.navigation.pop()
                    }
                }).catch(err => {
                    // console.log({...err})
                })

        }
    }

    render() {

        const { approvalUrl } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ? <WebView
                        style={{ height: '100%', width: '100%', marginTop: 40 }}
                        source={{ uri: approvalUrl }}
                        onNavigationStateChange={this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                        // style={{ marginTop: 20 }}
                    /> : <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{
                            color:'black',
                            fontSize: 24,
                            alignSelf:'center'
                            }}>الرجاء الانتظار </Text>

                        <ActivityIndicator color={'black'} size={'large'} />
                    </View>
                }
            </View>
        )
    }
}