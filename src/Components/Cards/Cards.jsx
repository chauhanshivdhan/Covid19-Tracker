import React from 'react'
import {Card, CardContent, Typography, Grid} from  '@material-ui/core'
import Countup from 'react-countup'
import cx from 'classnames'
import Style from './Cards.module.css'
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className= {Style.container}>
            <Grid container spacing= {3} justify='center'>

                <Grid item component= {Card} xs={12} md={3}className={cx(Style.card, Style.infected)}>
                    <CardContent>
                        <Typography color="primary" variant ="h5" gutterBottom>Infected</Typography>
                        <Typography variant ="h4">
                            <Countup  start= {0} end={confirmed.value} duration= {3} separator= "," />
                        </Typography><br />
                        <Typography color="primary">Last Updated : {new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="h6">Total Number Of Cases From Covid-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component= {Card} xs={12} md={3}className={cx(Style.card, Style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" variant ="h5" gutterBottom>Recovered</Typography>
                        <Typography variant ="h4">
                        <Countup  start= {0} end={recovered.value} duration= {3} separator= "," />
                        </Typography><br />
                        <Typography color="textSecondary">Last Updated : {new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="h6">Total Number Of Recoveries From COVID-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item component= {Card} xs={12} md={3}className={cx(Style.card, Style.deaths)}>
                    <CardContent>
                        <Typography color="error" variant ="h5" gutterBottom>Deaths</Typography>
                        <Typography variant ="h4">
                        <Countup  start= {0} end={deaths.value} duration= {3} separator= "," /></Typography><br />
                        <Typography color="error">Last Updated : {new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="h6">Total Number Of Deaths From COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}
export default Cards