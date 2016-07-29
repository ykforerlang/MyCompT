/**
 * Created by yk on 2016/7/29.
 */

class Button extends Component {
    static propTypes = {
        ...Text.protoTypes,

        underlayColor : React.PropTypes.string,
        value: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
        const rawStyle = StyleSheet.flatten(props.style) || {};
        this._backgroundColor = rawStyle.backgroundColor || 'grey'
        this._underlayColor = props.underlayColor || 'blue'
    }

    render() {
        return (
            <Text ref={comp => this._text = comp}
                  style={[styles.text, this.props.style]}
                  onPress = {this.props.onPress.bind(this)}
                  onTouchStart = {this._handleTouch.bind(this, this._underlayColor)}
                  onTouchEnd = {this._handleTouch.bind(this, this._backgroundColor)}
            >
                {this.props.value}
            </Text>
        )
    }

    _handleTouch(targetColor) {
        this._text.setNativeProps({
            style:{
                backgroundColor:targetColor
            }
        })
    }
}

const styles = StyleSheet.create({
    text: {
        paddingTop:5,
        paddingButton:5,
        borderColor:'grey',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:5,
        backgroundColor:'grey',
        textAlign:'center',
    }
})