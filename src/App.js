import React from "react";

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import {Cards , Chart , CountryPicker} from "./components";
import styles from './App.module.css';
import {fetchData} from "./api";
import coronaImage from "./images/covid.png";

class App extends React.Component{

    state = {
        data : {},
        country : '',
    }

    async componentDidMount(){
        const featchedData = await fetchData();
        this.setState({data : featchedData});
    }

    handleCountryChange = async (country) =>{
        // console.log(country);
        const fetchedData = await fetchData(country);
        //fetch data
        // console.log(fetchedData);
        //set State
        this.setState({data : fetchedData,country : country});
    }

    render(){

        const {data,country} = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
        )
    }
}

export default App;