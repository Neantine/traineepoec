var React = require('react');
var ReactDOM = require('react-dom');
var Remarkable = require('remarkable');


var HackerNewsBox = React.createClass({
    loadCommentsFromServer: function() {
        console.log("HackerNewsBox loadCommentsFromServer ", this.props.url);
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {

        console.log("HackerNewsBox render ", this.state.data);

        return (
        <div className="hackerNewsBox">

            <h1>Hacker News</h1>
            <ItemList data={this.state.data} />
            {/*// <ItemBox url="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty" pollInterval={2000} />*/}
            {/*//     <a href=""> new |</a>*/}
            {/*// <ItemBox url="" pollInterval={2000}/>*/}
            {/*//     <a href=""> comments |</a>*/}
            {/*// <ItemBox url="https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty" pollInterval={2000}/>*/}
            {/*//      <a href="">show |</a>*/}
            {/*<ItemBox url="https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty" pollInterval={2000}/>*/}
                {/*<a href="">ask |</a>*/}
            {/*<ItemBox url="https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty" pollInterval={2000}/>*/}
                {/*<a href="">jobs</a>*/}

        </div>
        )
    }
});


var ItemList =  React.createClass({

    render: function () {
        console.log("Item list render: ", this.state.data[0]);

        //var items = this.props.data.map(function(item) {
        var item_url = "https://hacker-news.firebaseio.com/v0/item/"+this.state.data[0]+".json?print=pretty";

        console.log("Item list render: ", item_url);

        return (

            <Item url=""/>

        );
    }
});


var Item = React.createClass({
    loadCommentsFromServer: function() {

        //console.log("Item loadCommentsFromServer ", this.props);

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.toString());
        return { __html: rawMarkup };
    },
    render: function() {

        return (
            <div className="item">
                {/*{this.props.by}*/}
                {/*{this.props.descendants}*/}
                {/*{this.state.data.id}*/}
                {/*{this.props.kids}*/}
                {/*{this.props.score}*/}
                {/*{this.props.time}*/}
                {this.state.data.title}
                {/*{this.props.text}*/}
                {/*{this.props.type}*/}
                {/*{this.props.url}*/}
                {/*<span dangerouslySetInnerHTML={this.rawMarkup()} />*/}
            </div>
        );
    }
});


ReactDOM.render(
    <HackerNewsBox url="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty" pollInterval={10000}/>,
    document.getElementById('content')
);