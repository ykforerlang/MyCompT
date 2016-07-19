/**
 * Created by yk on 2016/7/15.
 */

class Match extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.brief}>
                    <View style={styles.player}>
                        <Image source={require("../../image/player/514364.jpg")}/>
                        <Text style={styles.briefText}>天穹守望者</Text>
                    </View>
                    <View style={styles.hero}>
                        <Image source={require("../../image/hero/1.png")}/>
                        <Text  style={styles.briefText}>天穹守望者</Text>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.itemsLine}>
                            <Image source={require("../../image/item/1.png")}/>
                            <Image source={require("../../image/item/2.png")}/>
                            <Image source={require("../../image/item/3.png")}/>
                        </View>

                        <View style={styles.itemsLine}>
                            <Image source={require("../../image/item/4.png")}/>
                            <Image source={require("../../image/item/5.png")}/>
                            <Image source={require("../../image/item/6.png")}/>
                        </View>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={styles.detailLeft}>
                        <Text style={styles.detailText}>等级: 11</Text>
                        <Text style={styles.detailText}>金钱: 1678</Text>
                        <Text style={styles.detailText}>K/D/A: 10/22/3</Text>
                    </View>
                    <View style={styles.detailRight}>
                        <Text style={styles.detailText}>正/反补: 200/20</Text>
                        <Text style={styles.detailText}>GPM/XPM: 780/560</Text>
                        <Text style={styles.detailText}>英雄/塔伤害: 5000/3000</Text>
                    </View>
                </View>
            </View>
        )
    }

}
/*const width = Dimensions.get('width')
const height = Dimensions.get('height')*/
const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    brief: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    player: {
        flex: 1,
        width: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'
    },

    hero: {
        flex: 1,
        flexDirection: 'row',
        width: 10,
        overflow: 'hidden',
        marginLeft: 5,
        alignItems: 'center',
    },

    items: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: 10,
        overflow: 'hidden',
        paddingTop: 5,
        paddingBottom: 5,
    },

    briefText: {
        fontSize: 13,
    },

    itemsLine: {
        flexDirection: 'row',
    },

    detail: {
        marginLeft:30,
        flexDirection :'row',
        backgroundColor:'#F5F5DC',
        justifyContent:'flex-start'
    },

    detailLeft: {
        width:1,
        flex:1,
        padding:5,
    },
    detailRight: {
        width:1,
        flex:1,
        padding:5,
        borderLeftWidth:1,
        borderLeftColor:'#D3D3D3',
        borderLeftStyle:'solid',
    },
    detailText: {
        fontSize:10,
        fontWeight:300,
    }



})

ReactDOM.render(
    <Match/>,
    document.getElementById('container')
);


// set span/text height

$("span").each(function() {
    let thiz = $(this)
    console.log(thiz.attr("data-numberOfLines"))
    if (!thiz.attr("data-numberOfLines")) return
    console.log("hi")
    thiz.height(13 * thiz.attr("data-numberOfLines"))
})
