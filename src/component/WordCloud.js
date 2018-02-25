import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import cloud from 'd3-cloud';


/**
 * WordCloud
 *
 * props:
 *  - words: words to display, it's list of objects that in shape:
 *    {
 *      text: word to display,
 *      frequence: frequence of the word, large frequence will display larger
 *    }
 *  - width: width of this component. If not specified this will be the width of
 *           the element.
 *  - height: height of this component. If not specifid this will be 9 / 16 of
 *            the width.
 *
 */
class WordCloud extends Component {

    constructor(props) {
        super(props);

        this._wordCloud = null;

        this._wordCloudRef = this._wordCloudRef.bind(this);
        this._getComputedWidth = this._getComputedWidth.bind(this);
        this._render = this._render.bind(this);
    }

    componentDidMount() {
        this._render();
    }

    _render() {
      const { width=this._getComputedWidth(), height=width * 9 / 16 } = this.props;
      const { words } = this.props;
      const layout = cloud()
          .size([width, height])
          .words(this._calculateWords(words, height / 10, height / 8))
          .rotate(0)
          .fontSize(d => d.size)
          .on('end', words => {
              select(this._wordCloud).selectAll('svg').remove();
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

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.words !== this.props.words) {
        this._render();
      }
    }

    _calculateWords(words, minSize, maxSize) {
      const minFrequence = min(words, word => word.frequence);
      const maxFrequence = max(words, word => word.frequence);
      const size = scaleLinear()
        .domain([minFrequence, maxFrequence])
        .range([minSize, maxSize]);
      return _.map(words, word => ({ text: word.text, size: size(word.frequence) }));
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
    words: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      frequence: PropTypes.number
    })),
    width: PropTypes.number,
    height: PropTypes.number
}

export default WordCloud;
