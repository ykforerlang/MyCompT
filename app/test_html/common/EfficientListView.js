/**
 * Created by yk on 2016/7/25.
 *
 */
class EfficientListView extends Component {
    static propTypes = {
        initArray: React.PropTypes.Array.isRequired,
        initialListSize: React.PropTypes.Number,
        premeptyRenderNum: React.PropTypes.Number,
    }


    constructor(props) {
        super(props)

        this.initArray = props.initArray
        this.initArrayLength = this.initArray.length
        this.premeptyRenderNum = props.premeptyRenderNum
        this.simpleDatas = []
        this._simpleRowData(0, props.initialListSize)
        const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged(r1, r2)});
        this.state.dataSouce = ds.cloneWithRows(this.simpleDatas, [this.simpleDatas])

        this.dynamicRowChange = {}
        this.vcHeightMap = {}
        this.headerHeight = 0
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSouce}
                renderHeader={this._renderHeader.bind(this)}
                onChangeVisibleRows={this._onCVR.bind(this, visibleRows, changedRows)}
                renderRow={this._renderRow.bind(this, rowData, sectionID, rowID, highlightRow)}
            />
        )
    }

    _renderHeader() {
        return (
            <View ref={comp => this.headerComp = comp}/>
        )
    }

    _onCVR(visibleRows, changedRows) {
        const vsId = Object.keys(visibleRows)[0]
        const visibleRIdList = Object.keys(visibleRows[vsId])

        const sId = Object.keys(changedRows)[0]
        // mostly changedRows[sId]'s length is 1. maybe 2 (one is hidden , the other is show at same time)
        for (let ele in changedRows[sId]) {
            const rId = Object.keys(ele)[0]
            const value = ele[rid]
            if (!value && Number(visibleRIdList[0]) - 1 == rId) { // top from visible to hidden
                if (rId - this.premeptyRenderNum >= 0) {
                    this.simpleDatas.shift()
                    this.dynamicRowChange[this.simpleDatas[0] + ""] = 'hidden'
                } else {
                    return //not setState
                }
            }

            if (!value && Number(visibleRIdList[length - 1]) + 1 == rId) { // botton from visible to hidden
                this.simpleDatas.pop()
            }

            if (value && visibleRIdList[visibleRIdList.length - 1] == rId) { // botton from hidden to visible
                const max = this.simpleDatas[this.simpleDatas.length - 1]
                if (max + 1 < this.initArrayLength) {
                    this.simpleDatas.push(max + 1)
                } else {
                    return // not setState
                }
            }

            if (value && visibleRIdList[0] == rId) { //top from hidden to visible
                const min = this.simpleDatas[0]
                if (min >= 1) {
                    this.simpleDatas.unshift(min - 1)
                    this.dynamicRowChange[(min -1) + "" ] = 'show'
                } else {
                    return // not setState
                }
            }

        }
        this.setState({
            dataSouce: dataSouce.cloneWithRows(this.simpleDatas, [this.simpleDatas])
        })
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        if (this.dynamicRowChange[rowData + ""] === 'hidden') {
            const rowHeight = this.vcHeightMap.rowID
            delete this.vcHeightMap.rowID
            this.headerHeight += rowHeight
            this.headerComp.setNativeProps({
                height: this.headerHeight
            })
            return null
        }
        const innerView = this.props.renderRow(this.initArray[rowData])
        if (this.dynamicRowChange[rowData + ""] === 'show') {
            return <ViewCell isShow={true} innerView={innerView} effiList={this} rowID={rowData}/>
        }

        return (
            <ViewCell innerView={innerView} effiList={this} rowID={rowData}/>
        )
    }

    _rowHasChanged(r1, r2) {
        if (this.dynamicRowChange[r2 + ""]) return true // include hidden and show
        return false
    }

    _simpleRowData(start, end) {
        for (let i = start; i <= end; i++) {
            this.simpleDatas.push(i)
        }
    }
}