/**
 * Created by yk on 2016/7/22.
 */

class AccordionTitleTest extends Component {

    constructor(props) {
        super(props)
        this.state = {hideBody:true}
        this.height = new Animated.Value(0)

    }
    componentDidMount() {
        /*let bodyHeight = this.props.bodyHeight
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
        }*/

    }

    render(){
        let {title, body, underlayColor} = this.props
        return (
            <View>
                <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor={underlayColor}>
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
        console.log("click")
        this.setState({
            hideBody:false
        })
    }
}

module.exports = AccordionTitleTest

/*add */
let fakeProps = {
    "title":(<View><h1>title</h1></View>),
    "body":(<View><span>body</span></View>),
    "bodyHeight:": 80,
    "underlayColor":'blue',
}
let Comp = module.exports
ReactDOM.render(
    <Comp {...fakeProps}/>,
    document.getElementById('container')
);


//some other logic
$(".__TouchableHighlight").mousedown(function() {
    $(this).css('background', $(this).attr('data-underlayColor'))
})
$(".__TouchableHighlight").mouseup(function() {
    $(this).css('background', $(this).attr('data-backgroundColor'))
})