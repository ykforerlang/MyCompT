class ViewCell extends Component {
    constructor(props) {
        super(props)
        this.effiList = props.effiList
    }


    componentDidMount() {
        const rowID = this.props.rowID + ""
        this.effiList.vcHeightMap[rowID] = this.layout.height

        if (this.props.isShow) {
            this.effiList.headerHeight -= this.layout.height
            this.effiList.headerComp.setNativeProps({
                height:this.effiList.headerHeight
            })
        }
    }

    render() {
        return (
            <View onLayout={this._layoutHandler.bind(this)}>
                {this.props.innerView}
            </View>
        )
    }

    _layoutHandler (event) {
        this.layout = event.nativeEvent.layout
    }
}