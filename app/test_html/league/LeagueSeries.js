/**
 * Created by yk on 2016/7/20.
 */

class LeagueSeries extends Component {

    render() {
        return (
            <View style={styles.seriesBrief}>
                <Text style={styles.seriesTime}>2014/12/01 24时</Text>
                <View style={styles.seriesTeam}>
                    <Text style={[styles.teamText,{textAlign:'right'}]}>EHOMEsfdsfsff</Text>
                    <Image source={require("../../image/team/1105664.jpg")} style={styles.teamIcon}/>
                    <Text style={styles.vs}>VS</Text>
                    <Image source={require("../../image/team/1951061.jpg")} style={styles.teamIcon}/>
                    <Text style={styles.teamText}>EHOMEsfdsfsff</Text>
                </View>
                <Text style={styles.type}>BO5</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seriesBrief: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        overflow: 'hidden',
    },

    seriesTime: {
        fontSize: 13,
        fontStyle: 'italic',
        flex: 3,
    },

    teamText: {
        fontSize: 13,
        overflow: 'hidden',
    },

    teamIcon: {
        width: 32,
        height: 24,
    },

    vs: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14,
        fontWeight: 600,
        fontStyle: 'italic',
    },

    seriesTeam: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    type: {
        fontSize: 13,
        textAlign: 'right',
        fontStyle: 'italic',
        flex: 1,
    },

})

module.exports = LeagueSeries

/*add */
let Comp = module.exports
ReactDOM.render(
    <Comp/>,
    document.getElementById('container')
);