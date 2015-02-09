var React = require("react");
var FeatureStore  = require('../../stores/FeatureStore');

var ArchiveFeatureComponent = React.createClass({
    getInitialState: function() {
        return {
            archivedFeatures: []
        };
    },

    removeToggleFromState: function(item) {
        var updatedArchive = this.state.archivedFeatures.filter(function(f) {
            return f.name !== item.name;
        });
        this.setState({archivedFeatures: updatedArchive});
    },

    onRevive: function( item) {
        FeatureStore.reviveFeature(item).then(this.removeToggleFromState.bind(this, item));
    },

    componentDidMount: function () {
        FeatureStore.getArchivedFeatures().then(function(data) {
            this.setState({archivedFeatures: data.features});
        }.bind(this))
    },

    render: function () {
        return (
            <div>
                <h1>Archived feature toggles</h1>
                <table className="outerborder man">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.archivedFeatures.map(this.renderArchivedItem)}
                    </tbody>
                </table>
            </div>
            );
    },

    renderArchivedItem: function(f) {
        return (
            <tr key={f.name}>
                <td>
                    {f.name}<br />
                    <span className="opaque smalltext word-break">{f.description}</span>

                </td>
                <td className="rightify" width="150">
                    <button onClick={this.onRevive.bind(this, f)} title="Revive feature toggle">
                        <span className="icon-svar"></span>
                    </button>
                </td>
            </tr>);
    }
});

module.exports = ArchiveFeatureComponent;