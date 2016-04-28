var Input_class = React.createClass({
    /* The initial state of the text input fields */
    getInitialState: function() {
        return {nameInput: '', passwordInput: ''};
    },
    /* Gets called when the first input field changes */
    handleChangeName: function(event) {
        this.setState({nameInput: event.target.value});
    },
    /* Gets called when the second input field changes */
    handleChangePassword: function (event) {
        this.setState({passwordInput: event.target.value});
    },
    /* Gets called when the SendJSON button is pressed */
    onButtonClickSendJSON: function () {
        $.ajax({
            type: "POST",
            url: "/userJSON",
            data: JSON.stringify({ name : this.state.nameInput, password : this.state.passwordInput }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){alert(data);},
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    },
    /* Gets called when the Send URL encoded button is pressed */
    onButtonClickSendUrlEncoded: function () {
        $.ajax({
            type: "POST",
            url: "/user",
            data: {name: this.state.nameInput, password: this.state.passwordInput},
            success: function(data){alert(data);},
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    },
    /* Gets called when the Request button is pressed */
    onButtonClickRequest: function () {
        $.ajax({
            type: "GET",
            url: "/user",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                this.setState({nameResponse: data.name});
                //this.setState({passwordResponse: data.password});
            }.bind(this),
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    },
    /* Gets called by the ReactDOM.render function */
    render: function() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.nameInput}
                    onChange={this.handleChangeName}
                />
                <input
                    type="text"
                    value={this.state.passwordInput}
                    onChange={this.handleChangePassword}
                />
                <button
                    type="button"
                    onClick={this.onButtonClickSendJSON}>
                    Send JSON
                </button>
                <button
                    type="button"
                    onClick={this.onButtonClickSendUrlEncoded}>
                    Send URL encoded
                </button>
                <h1>{this.state.nameResponse}</h1>
                <h1>{this.state.passwordResponse}</h1>
                <button
                    type="button"
                    onClick={this.onButtonClickRequest}>
                    Request
                </button>
            </div>
        );
    }
});

ReactDOM.render(
    <Input_class/>,
    document.getElementById('content')
);
