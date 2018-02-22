import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import cloud from 'd3-cloud';


class WordCloud extends Component {

    constructor(props) {
        super(props);

        this._wordCloud = null;

        this._wordCloudRef = this._wordCloudRef.bind(this);
        this._getComputedWidth = this._getComputedWidth.bind(this);
    }

    componentDidMount() {
        const { width=this._getComputedWidth(), height=width * 9 / 16 } = this.props;
        const layout = cloud()
            .size([width, height])
            .words(
                ["Hello", "world", "normally", "you", "want", "more", "words",
                    "than", "this"
                ].map(d => ({text: d, size: height / 10 + Math.random() * height / 15}))
            )
            .rotate(0)
            .fontSize(d => d.size)
            .on('end', words => {
                select(this._wordCloud).append('svg')
                    .attr("width", layout.size()[0])
                    .attr("height", layout.size()[1])
                    .append("g")
                    .attr("transform", `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`)
                    .selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", d => `${d.size}px`)
                    .attr('text-anchor', 'middle')
                    .attr("transform", d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
                    .text(d => d.text);
            });
        layout.start();
    }

    _getComputedWidth() {
        return window.getComputedStyle(this._wordCloud).width.slice(0, -2);
    }

    _wordCloudRef(ref) {
        this._wordCloud = ref;
    }

    render() {
        return (
            <div ref={this._wordCloudRef}></div>
        );
    }
}

WordCloud.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

export default WordCloud;
