/**
 * Created by yk on 2016/7/22.
 */

class AccordionTitle extends Component {
    constructor(props) {
        super(props)
        this.state.hideBody = true
        this.height = new Animated.Value(0)

    }
    componentDidMount() {
        let bodyHeight = this.props.bodyHeight
        if (! this.state.hideBody) {
            let showDuration = this.props.showDuration || 500
            Animated.timing(
                this.height,
                {
                    toValue: bodyHeight,
                    duration: showDuration
                }
            ).start();
        } else {
            let hideDuration = this.props.hideDuration || 100
            Animated.timing(
                this.height,
                {
                    toValue: 0,
                    duration: hideDuration
                }
            ).start();
        }

    }

    render(){
        let {title, body, underlayColor} = this.props
        return (
            <View>
                <TouchableHighlight onPress={this._onPressButton} underlayColor={underlayColor}>
                    {title}
                </TouchableHighlight>
                <Animated.View
                    style={{
                        overflow:'hidden',
                        height:this.height,
                    }}
                >
                    {this.state.hideBody ? null : body}
                </Animated.View>
            </View>
        )
    }

    _onPressButton() {
        this.state.setState({
            hideBody:false
        })
    }
}