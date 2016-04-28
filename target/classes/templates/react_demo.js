var input_class = React.createClass({
    render : function() {
        return <input type="text" value="Hello!" />;
    }
});

ReactDOM.render(
//React classes starts with upper case. The url will be available in the
//React counter class under this.props.url
    <Input_class/>,
    document.getElementById('content')
);
