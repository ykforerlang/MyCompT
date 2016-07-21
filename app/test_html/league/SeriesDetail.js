/**
 * Created by yk on 2016/7/21.
 */

class SeriesDetail extends Component {

    render() {
        return (
            <View>
                <View style={styles.detail}>
                    <View style={commonStyles.flexRow}>
                        <Text style={commonStyles.fs12Flex}>比赛ID: 20130132303</Text>
                        <Text style={commonStyles.fs12Flex}>时长: 24分22</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameRed}>LGD:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/10.png")}/>
                                <Image source={require("../../image/hero/11.png")}/>
                                <Image source={require("../../image/hero/12.png")}/>
                                <Image source={require("../../image/hero/13.png")}/>
                                <Image source={require("../../image/hero/14.png")}/>
                            </View>
                        </View>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameBlue}>EHOME:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/15.png")}/>
                                <Image source={require("../../image/hero/16.png")}/>
                                <Image source={require("../../image/hero/17.png")}/>
                                <Image source={require("../../image/hero/18.png")}/>
                                <Image source={require("../../image/hero/19.png")}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={commonStyles.flexRow}>
                        <Text style={commonStyles.fs12Flex}>比赛ID: 20130132303</Text>
                        <Text style={commonStyles.fs12Flex}>时长: 24分22</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameRed}>LGD:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/10.png")}/>
                                <Image source={require("../../image/hero/11.png")}/>
                                <Image source={require("../../image/hero/12.png")}/>
                                <Image source={require("../../image/hero/13.png")}/>
                                <Image source={require("../../image/hero/14.png")}/>
                            </View>
                        </View>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameBlue}>EHOME:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/15.png")}/>
                                <Image source={require("../../image/hero/16.png")}/>
                                <Image source={require("../../image/hero/17.png")}/>
                                <Image source={require("../../image/hero/18.png")}/>
                                <Image source={require("../../image/hero/19.png")}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={commonStyles.flexRow}>
                        <Text style={commonStyles.fs12Flex}>比赛ID: 20130132303</Text>
                        <Text style={commonStyles.fs12Flex}>时长: 24分22</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameRed}>LGD:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/10.png")}/>
                                <Image source={require("../../image/hero/11.png")}/>
                                <Image source={require("../../image/hero/12.png")}/>
                                <Image source={require("../../image/hero/13.png")}/>
                                <Image source={require("../../image/hero/14.png")}/>
                            </View>
                        </View>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameBlue}>EHOME:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/15.png")}/>
                                <Image source={require("../../image/hero/16.png")}/>
                                <Image source={require("../../image/hero/17.png")}/>
                                <Image source={require("../../image/hero/18.png")}/>
                                <Image source={require("../../image/hero/19.png")}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.detail}>
                    <View style={commonStyles.flexRow}>
                        <Text style={commonStyles.fs12Flex}>比赛ID: 20130132303</Text>
                        <Text style={commonStyles.fs12Flex}>时长: 24分22</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameRed}>LGD:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/10.png")}/>
                                <Image source={require("../../image/hero/11.png")}/>
                                <Image source={require("../../image/hero/12.png")}/>
                                <Image source={require("../../image/hero/13.png")}/>
                                <Image source={require("../../image/hero/14.png")}/>
                            </View>
                        </View>
                        <View style={commonStyles.flexRow}>
                            <Text style={styles.teamNameBlue}>EHOME:</Text>
                            <View style={styles.heroIcon}>
                                <Image source={require("../../image/hero/15.png")}/>
                                <Image source={require("../../image/hero/16.png")}/>
                                <Image source={require("../../image/hero/17.png")}/>
                                <Image source={require("../../image/hero/18.png")}/>
                                <Image source={require("../../image/hero/19.png")}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detail: {
        backgroundColor: '#f0f0f0',
        marginLeft: 30,
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderTopStyle: 'solid'
    },
    team: {paddingTop: 5},
    teamNameRed: {fontSize: 12, fontStyle: 'italic', flex: 1, color: 'red'},
    teamNameBlue: {fontSize: 12, fontStyle: 'italic', flex: 1, color: 'blue'},
    heroIcon: {flexDirection: 'row', flex: 1,}

})
const commonStyles = StyleSheet.create({
    flexRow: {flexDirection: 'row'},
    fs12Flex: {fontSize: 12, flex: 1},
})


module.exports = SeriesDetail

/*add */
let Comp = module.exports
ReactDOM.render(
    <Comp/>,
    document.getElementById('container')
);