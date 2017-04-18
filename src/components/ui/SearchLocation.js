import { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { GooglePlaces } from 'react-google-places-component';
export class SearchLocation extends Component{
    constructor(props){
        super(props);
    }

    render (){
        return (
             <div className = "row margin-top">
                 <div className="container">
                    <h3>Welcome to search places. Here you can search places near your location.</h3>
                </div>
                 <div className="row">
                     <div className="container">
                         <Autocomplete
                             style={{width: '90%'}}
                             onPlaceSelected={(place) => {
                             place = place;
                              console.log(place);
                            }}
                                             types={[]}
                                             componentRestrictions={{country: "ca"}}
                         />
                     </div>
                 </div>
             </div>
        )
    }
}