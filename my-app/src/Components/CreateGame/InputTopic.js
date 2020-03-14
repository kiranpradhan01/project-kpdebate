import React from 'react';
import GetTopicModal from './GetTopicModal.js';
import * as d3 from 'd3';
import topics from '../../data/topics.csv';
import '../../css/create-game.css'

export class InputTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modal: false,
            closeAll: false,
            category: "" // how to send category up to inputtopic from gettopicmodal
            // has no knowledge of nested modal
        }
    }

    componentDidMount() {
        d3.csv(topics).then((data) => {
            this.setState({
                data: data
            });
        });
    }

    showModal = () => {
        this.setState({modal: true})
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    generateCategories() {
        let options = [];
        let topicsVisited = [];
        for (let i = 0; i < this.state.data.length; i++) {
            let topic = this.state.data[i];
            if (!topicsVisited.includes(topic.category)) {
                topicsVisited.push(topic.category);
                options.push(<option key={i} value={topic.category}>{topic.category}</option>);
            }
        }
        return options;
    }

    getRandomTopics() {
        let categoryTopics = null;
        // evaluate what subcategory to "query" from
        if (this.state.category !== "Anything") {
            categoryTopics = [];
            this.state.data.forEach((topic) => {
                if (topic.category === this.state.category)
                    categoryTopics.push(topic);
            });
        } else {
            categoryTopics = this.state.data;
        }
        // randomly select 2 topics from the described category
        let displayedTopics = [];
        let firstTopic = Math.floor((Math.random() * categoryTopics.length));
        let secondTopic = null;
        displayedTopics.push(categoryTopics[firstTopic]);
        while (secondTopic === null || secondTopic === firstTopic) { // do this to avoid duplicates
            secondTopic = Math.floor((Math.random() * categoryTopics.length));
        }
        displayedTopics.push(categoryTopics[secondTopic]);
        return displayedTopics;
    }

    render(){
        return (
            <section id="topic" class="createGameFirst createGameContainer">
            <div class="card createGameCard">
                <div class="card-body">
                    <h4 class="card-title">Topic</h4>
                        <div class="mx-3">
                            <div class="row">
                                <form class="col-sm-8 col-md-6 mx-auto">
                                    <input id="input-topic" class="w-100" type="text" placeholder="Enter a debate topic..." onChange={(event, value) => this.props.onInput("topic", event.target.value)}/>
                                </form>
                            </div>
                        <div class="row">
                            <button id="open-modal" class="btn btn-dark mt-2 ml-auto" data-toggle="modal" data-target="#modalRandomize" onClick={()=> {this.showModal()}}>Randomize!</button>
                        </div>
                    </div>
                </div>
                <GetTopicModal show={this.state.modal} handleClose={this.closeModal} onCategorySelection={(event, value)=> this.setState({category: event.target.value})} data={this.state.data} randomTopics={this.getRandomTopics()} options={this.generateCategories()}/>
            </div>
            </section>
        )
    }
} 