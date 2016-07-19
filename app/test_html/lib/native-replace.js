/**
 * Created by yk on 2016/7/18.
 */
window.require = function(resources) {
    let index1 = resources.lastIndexOf("?")
    index1 = index1 == -1 ? resources.length : index1
    let index2 = resources.lastIndexOf(".")
    if (index2 != -1) {
        let suffix = resources.substring(index2 + 1, index1)
        if (suffix == "jpg" || suffix == "JPG" || suffix == "png" || suffix == "png" || suffix == "bmp" || suffix == "BMP" || suffix == "gif" || suffix == "GIF") {
            return {uri:resources}
        }
    }

    // do js logic
    console.log("do js logic")
}

window.module = {}

window.StyleSheet = {
    create: obj => obj
}
function mergeStyle(styles) {
    if(!styles) return {}

    if (styles[0]) {
        let result ={}
        for (let i = 0; i<styles.length; i++) {
            let style = styles[i]
            for (let key in style) {
                result[key] = style[key]
            }
        }
        return result
    } else {
        return styles
    }
}


window.Component = React.Component
class View extends React.Component {
    render() {
        const  style  = mergeStyle(this.props.style)
        return (
            <div {...this.props} style={style}></div>
        )
    }
}
window.View = View

class Image extends React.Component {
    render() {
        const src = this.props.source.uri
        const  style  = mergeStyle(this.props.style)
        return (
            <img {...this.props} style={style} src={src}/>
        )
    }
}
window.Image = Image

class Text extends  React.Component {
    render() {
        const  style  = mergeStyle(this.props.style)
        return (
            <span {...this.props} style={style}>{this.props.children}</span>
        )
    }
}
window.Text = Text

class ListView extends Component {

    render() {
        const  style  = mergeStyle(this.props.contentContainerStyle)
        const  dataSource = this.props.dataSource
        const initialListSize = this.props.initialListSize
        const initialSource = dataSource.slice(0, initialListSize)
        return (
            <div {...this.props} style={style}>
                {initialSource.map((ele) => this.props.renderRow(ele))}
            </div>
        )
    }
}
ListView.DataSource = function DataSource(){

}
ListView.DataSource.prototype.cloneWithRows = (obj =>obj)
window.ListView = ListView



