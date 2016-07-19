/**
 * Created by yk on 2016/7/19.
 */
const description = "锦标赛由8个预选赛区组成，最终\n集结16支顶尖队伍。预选赛将\n在2天内进行胜败者组的比";
class LeagueAll extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.brief}>
                    <View>
                        <Text style={styles.tag}>免费</Text>
                        <Image source={require("../../image/league/2129.jpg")}></Image>
                    </View>
                    <View style={styles.desAndPrice}>
                        <Text style={styles.pricePool}>奖金:1000000$</Text>
                        <Text numberOfLines={3} style={styles.description}>{description}</Text>
                    </View>
                </View>



                <Text style={styles.title}>比赛</Text>


                <View>
                    <View style={styles.seriesBrief}>
                        <Text style={styles.seriesTime}>2014/12/01 24时</Text>

                        <View style={styles.seriesTeam}>
                            <Text style={[styles.teamText,{textAlign:'right'}]}>EHOME</Text>
                            <Image source={require("../../image/team/1105664.jpg")} style={styles.teamIcon}/>
                            <Text style={styles.vs}>VS</Text>
                            <Image source={require("../../image/team/1951061.jpg")} style={styles.teamIcon}/>
                            <Text style={styles.teamText}>LGD</Text>
                        </View>

                        <Text style={styles.type}>BO5</Text>

                        <Text style={styles.downTag}>V</Text>
                    </View>
                    <View style={styles.seriesDetail}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
    },
    brief: {
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    tag: {
        position: 'absolute',
        backgroundColor: '#DA70D6',
        fontSize: 10,
        fontStyle: 'italic',
    },
    desAndPrice: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
    },
    description: {
        overflow: 'hidden',
        fontSize: 12,
    },
    pricePool: {
        fontSize: 10,
        color: '#CD853F',
        fontStyle: 'italic',
        textAlign: 'right',
    },

    title:{
        fontSize:15,
        fontWeight:600,
        textAlign:'center',
        backgroundColor: '#f0f0f0',
        marginTop:6,
        padding:5,
        marginBottom:6,
    },

    seriesBrief:{
        marginTop:2,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#f0f0f0',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:10,
    },

    seriesTime: {
        fontSize:10,
        fontStyle:'italic',
        width:90,
    },

    teamText: {
        fontSize:10,
        width:60,
        overflow:'hidden',
    },

    teamIcon: {
        width:32,
        height:24,
    },

    vs: {
        marginLeft:5,
        marginRight:5,
        fontSize:14,
        fontWeight:600,
        fontStyle:'italic',
    },

    seriesTeam: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    type:{
        fontSize:12,
        textAlign:'right',
        fontStyle:'italic',
    },

    downTag: {
        width:30,
        textAlign:'center',
    }
})

ReactDOM.render(
    <LeagueAll/>,
    document.getElementById('container')
);