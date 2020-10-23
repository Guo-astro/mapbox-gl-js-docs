import React from 'react';
import PropTypes from 'prop-types';
import { groupedExpressions } from '../../data/types';
import SDKSupportTable from '../sdk_support_table';
import md from '../md';
import { highlightJavascript } from '../prism_highlight';
import { renderSignature } from './render-signature';
import Property from './property.js';
import related from '../../data/expressions-related.json';

export default class ExpressionReference extends React.Component {
    render() {
        const group = groupedExpressions.filter(
            (g) => g.name === this.props.group
        )[0];

        const Related = ({ links }) => {
            if (!links || !links.length === 0) return;
            return (
                <div className="">
                    <div className="txt-bold mb6">Related</div>
                    <ul className="mb18">
                        {links.map((link) => (
                            <li key={link.title}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        };
        return (
            <React.Fragment>
                {group.expressions.map(({ name, doc, type, sdkSupport }) => (
                    <React.Fragment key={name}>
                        <Property
                            id={`${
                                group.name === 'Types' ? 'types-' : ''
                            }${name}`}
                        >
                            {name}
                        </Property>

                        {doc && <div className="mb12">{md(doc)}</div>}

                        <div className="txt-bold mb6">Example</div>
                        {type.map((overload, i) => (
                            <div key={i}>
                                {highlightJavascript(
                                    renderSignature(name, overload)
                                )}
                            </div>
                        ))}
                        {related[name] && <Related links={related[name]} />}

                        {sdkSupport && <SDKSupportTable {...sdkSupport} />}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}

ExpressionReference.propTypes = {
    group: PropTypes.string.isRequired
};
