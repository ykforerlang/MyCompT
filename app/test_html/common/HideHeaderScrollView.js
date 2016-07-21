/**
 * Created by yk on 2016/7/21.
 */

class HideHeaderListView extends Component {
    constructor(props) {
        super(props)
        let {
            header,
            rowHasChanged,
            dataArray
            } = this.props
        this.ds = new ListView.DataSource({
            sectionHeaderHasChanged: () => false,
            rowHasChanged: rowHasChanged
        })
        this.state.dataSource = this.ds.cloneWithRowsAndSections({__h:header, __s:dataArray}, ['__h', "__s"])
    }

    render() {
        return (
            <ListView
                {...this.props}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSectionHeader={this._renderSectionHeader}
                enableEmptySections={true}
            />
        )
    }

    _renderSectionHeader(section) {
        if (section === '__s') {
            return this.props.title
        }

        return null // __h
    }
    _renderRow(rowData, sectionID) {
        if (sectionID === '__h'){
            return rowData
        } else {
            return this.props.renderRow(rowData, sectionID)
        }
    }
}