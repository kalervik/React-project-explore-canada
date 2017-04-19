import { Component } from 'react';
import Map from './Map';
import Places from './Places';
import superagent from 'superagent';
export class SearchLocation extends Component{
    constructor(){
        super();
        this.state ={
            venues: [],
            currentLocation: {
                lat : 43.6414378,
                lng: -79.391541
            }
        }
        this.successGettingLocation = this.successGettingLocation.bind(this);
    }
    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( this.successGettingLocation);
        }
        const latLang = "ll=" + this.state.currentLocation.lat + "," + this.state.currentLocation.lng;
        const url = "https://api.foursquare.com/v2/venues/search?v=20170406&"+ latLang + "&client_id=33ZXNT53ZBLRRMIIC1XG3GEYXFZ2MUK2HZRHDGUSGIOLY2MF&client_secret=CR5AQE0BTM3NRGDSQAY0OEEEGUT1EM1ZW5PQURRTC5XBIIVH";
        superagent
            .get(url)
            .query(null)
            .set('Accept', 'text/json')
            .end((error, response) => {
                const venues = response.body.response.venues;
                this.setState({
                    venues: venues
                })
            });
    }
    successGettingLocation(location){
        this.setState({
            currentLocation : {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    }
    render () {
        return (
            <div className="row margin-top">
                <div className="container-fluid">
                    <div className="col-md-6" style={{height:window.innerHeight}}>
                        <Map center ={this.state.currentLocation} markers = {this.state.venues} />
                    </div>
                    <div className="col-md-6">
                        <Places venues ={this.state.venues} />
                    </div>
                </div>
            </div>
        )
    }
}