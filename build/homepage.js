/// <reference path='../typings/index.d.ts'/>
System.register(['react', 'react-redux', './navigation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var React, react_redux_1, navigation_1;
    var Homepage;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            }],
        execute: function() {
            Homepage = (function (_super) {
                __extends(Homepage, _super);
                function Homepage(props) {
                    _super.call(this, props);
                }
                Homepage.prototype.componentWillMount = function () {
                    this.props.nav("default");
                };
                Homepage.prototype.componentDidUpdate = function () {
                    this.props.nav("default");
                };
                Homepage.prototype.render = function () {
                    var green = {
                        color: green
                    };
                    return (React.createElement("div", {className: "homepage"}, 
                        React.createElement(navigation_1.Navigation, null), 
                        React.createElement("h1", null, this.props.subPage), 
                        React.createElement("div", {className: "homepage__box"}, 
                            React.createElement("div", {className: "homepage__box--title"}, 
                                React.createElement("h1", null, "UC Berkeley IEEE")
                            ), 
                            React.createElement("div", {className: "homepage__box--content"}, 
                                React.createElement("button", {className: "content__button"}, "Join"), 
                                React.createElement("button", {className: "content__button"}, "Donate")))));
                };
                Homepage = __decorate([
                    react_redux_1.connect(function (state) { return ({ subPage: state.homepage }); }, function (dispatch) { return ({
                        nav: function (url) {
                            var action = { type: 'NAV', parent: "homepage", page: url };
                            dispatch(action);
                        }
                    }); })
                ], Homepage);
                return Homepage;
            }(React.Component));
            exports_1("Homepage", Homepage);
        }
    }
});
//# sourceMappingURL=homepage.js.map