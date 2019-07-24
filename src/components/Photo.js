import React, { Component } from 'react'
import axios from 'axios'

class Photo extends Component {

    state={
        photo:[],
        loading:true,
    }


    componentDidMount(){
        let search = window.location.search
        let params = new URLSearchParams(search)
        let photo_id = params.get('id')
        // console.log(search);
        // console.log(foo);

        axios.get('https://api.unsplash.com/photos/'+ photo_id + '/?client_id=73649800e2b8d8e568dc8ba183d9ba164a7926053c75eeafb8f9667644fc23de')
        .then(res => this.setState({
                photo: res.data,
                loading: false,
                
            })
        )
        
    }

    render() {

        console.log(this.state.photo)
        let photoo = this.state.photo
        return (
            <div>
                <div className="single-photo-wrapper">
                    <div className="photo-info">
                        <p>photo first name : {photoo.user && photoo.user.first_name}</p>
                        <p>photo last name :{photoo.user && photoo.user.last_name}</p>
                        <a href={photoo.links && photoo.links.download}>download</a>
                    </div>
                    <div className="photo-url">
                        <img src={photoo.urls && photoo.urls.full} alt=""/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Photo;
