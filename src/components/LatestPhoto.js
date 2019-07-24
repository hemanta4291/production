import React, { Component } from 'react'

import axios from 'axios'

 class LatestPhoto extends Component {

    state={
        photos:[],
        page:1,
        loading:true,
        search_query : true,
        seraching : false,
    }

    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=73649800e2b8d8e568dc8ba183d9ba164a7926053c75eeafb8f9667644fc23de&per_page=16&page='+this.state.page)
        .then(res => this.setState({
                photos: res.data,
                loading: false,
                page: this.state.page+1
                
            })
        )
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // All reload content
    loadmore=(e)=>{
        axios.get('https://api.unsplash.com/photos/?client_id=73649800e2b8d8e568dc8ba183d9ba164a7926053c75eeafb8f9667644fc23de&per_page=16&page='+this.state.page)
        .then(res => this.setState({
                photos: res.data,
                loading: false,
                page: this.state.page+1
                
            })
        )

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }

    //Search content pagination
    searchloadmore=(e)=>{
        axios.get('https://api.unsplash.com/search/photos/?client_id=73649800e2b8d8e568dc8ba183d9ba164a7926053c75eeafb8f9667644fc23de&query='+this.state.search_query+'&per_page=16&page='+this.state.page)
        .then(res => this.setState({
                photos: res.data.results,
                loading: false,
                seraching:true,
                page: this.state.page+1
                
            })
        )

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }


    //search query method

    searchQuery=(e)=>{
        this.setState({
            search_query: e.target.value
        })
        // axios.get('https://api.unsplash.com/search/photos/?client_id=46586f7407af308759850cb7358451640c67d0268f31f45ac1d9103443379ce9&query='+this.state.search_query+'&per_page=16&page='+this.state.page)
        // .then(res => this.setState({
        //         photos: res.data.results,
        //         loading: false,
        //         seraching:true,
        //         page: 2
                
        //     })
        // )
    }

    searchSumint=(e)=>{
        axios.get('https://api.unsplash.com/search/photos/?client_id=73649800e2b8d8e568dc8ba183d9ba164a7926053c75eeafb8f9667644fc23de&query='+this.state.search_query+'&per_page=16&page='+this.state.page)
        .then(res => this.setState({
                photos: res.data.results,
                loading: false,
                seraching:true,
                page: 2,
                total_found: res.data.total,
                total_found_pages: res.data.total_pages

                
            })
        )
        e.preventDefault();
    }
    
    render() {
        //console.log('wow'+this.state.total_found_pages)
        // console.log(this.state.photos);
        // console.log(this.state);
        if(this.state.loading === true){
            return (
                <div className="col-12 text-center">
                    <h1>Loadding..........</h1>
                </div>
            )
        }
        //all veriable
        
        let searchHeadeing = ''
        let nextsearchHandeling=''
        let foundData =''

        if(this.state.seraching === true){
            searchHeadeing = <h2>You Are Searching {this.state.search_query}</h2>
            nextsearchHandeling= <div onClick={this.searchloadmore} style={{cursor:'pointer'}} className="btn btn-primary load-more-btn">load more{this.state.page}</div>

            foundData = <div>Total found {this.state.total_found} with {this.state.page -1} of {this.state.total_found_pages}</div>
        }else{
            searchHeadeing = <h2>Latest Photos</h2>
            nextsearchHandeling= <div onClick={this.loadmore} style={{cursor:'pointer'}} className="btn btn-primary load-more-btn">load more{this.state.page}</div>
            foundData=''
        }
        
        return(
            <React.Fragment>

                <div className="row" style={{width:'100%'}}>
                        <div className="col-auto">{searchHeadeing}</div>
                        {foundData}
                        <div className="col text-right">
                        <form onSubmit={this.searchSumint} action="">
                            <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search keyword"/>
                            <input type="submit" value="search"/>
                        </form>
                        </div>
                </div>
                <div className="row">
                {
                    this.state.photos.map((photo)=> (
                        <div key={photo.id} className='col-lg-3 col-md-6'>
                            <div className="single-photo-item">
                                <a className="d-block" href={'photo?id='+ photo.id}>
                                   <div className="photo-wrapper">
                                        <img src={photo.urls.small} alt=""/>
                                   </div>
                                    <h5>{photo.user.first_name}</h5>
                                    <p className="cat-name">{photo.user.location}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        {nextsearchHandeling}
                    </div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default LatestPhoto;
