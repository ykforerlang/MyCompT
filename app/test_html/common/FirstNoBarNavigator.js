/**
 * Created by yk on 2016/7/21.
 */


class FirstNoBarNavigator extends Component {

    render() {
        const initialRoute = this.props.initialRoute
        initialRoute.__isFirst = true

        return (
            <Navigator {...this.props}
                navigationBar={null}
                initialRoute={initialRoute}
                renderScene={(route, navigator) =>this._wrapperRender(route, navigator)}
            />
        )

    }

    _wrapperRender(route, navigator) {
        if (route.__isFirst) {
            return this.props.renderScene(route, navigator)
        } else {
            return (
                <Navigator {...this.props}
                    navigator={navigator}
                    initialRoute={route}
                    navigationBar={
                       <Navigator.NavigationBar
                           routeMapper={{
                             LeftButton: this._leftButton.bind(this),
                             RightButton: () => null,
                             Title: (route) => (route.naviTitle ? <Text style={this.props.titleStyle}>{route.naviTitle}</Text> : null),
                           }}
                           style={this.props.barStyle}
                         />
                    }
                />
            )
        }
    }
    _leftButton(route, navigator, index, navState) {
       return (
           <View style={[{flexDirection:'column'},this.props.backStyle]}>
               <Icon name="ios-arrow-back"/>
               <Text onPress={() =>this._backPress(route, navigator, index)}>{route.naviBack ? route.naviBack : '返回'}</Text>
           </View>
       )
    }
    _backPress(route, navigator, index) {
        if (index === 0) {
            this.props.navigator.pop() // father navigator pop
        } else {
            navigator.pop() // sub navigator pop
        }
    }
}

