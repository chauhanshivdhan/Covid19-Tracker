import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import Charts from './Components/Charts/Charts'
import Style from './App.module.css'
import {fetchData} from './Api/index.js'
import Logo from './logo.png'

class App extends Component {
    state = {
        data: {},
        country:'',
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data})
    }
    handleCountryChange= async (country)=>{
        const data = await fetchData(country);
        this.setState({data, country:country});

   
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={Style.container}>
                <img alt ="Covid_Logo" className={Style.logo} src={Logo}/>
                <Cards data ={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country} /> 
                <div className={Style.footer}>
                   <p>Made With ❤ In India |</p>
                   <p>By Shivdhan Chauhan</p>
                </div>
            </div>
        )
    }
}

export default App
