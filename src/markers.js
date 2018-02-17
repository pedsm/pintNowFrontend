import React from 'react'
import { esriPromise } from 'react-arcgis';

export default class Marker extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        esriPromise(['esri/layers/FeatureLayer'])
            .then(([FeatureLayer]) => {

                // const data = this.props.pubs.map((pub,i) => ({
                //     geometry: {
                //         type: "point",
                //         x: pub.latitude,
                //         y: pub.longitude
                //     },
                //     attributes: {
                //         name: pub.name,
                //         ObjectID: i,
                //         DepArpt: "KATL",
                //         MsgTime: Date.now(),
                //         FltId: "UAL1"
                //     }
                // }))
                const data = [{
                    geometry: {
                        type: "point",
                        x: -100,
                        y: 38
                      },
                      attributes: {
                        ObjectID: 1,
                        DepArpt: "KATL",
                        MsgTime: Date.now(),
                        FltId: "UAL1"
                      }
                    }
                ]
                console.log(data)

                const fl = new FeatureLayer({
                    source: data,
                    fields: fields,
                    objectIdField: "ObjectID",  // field name of the Object IDs
                    geometryType: "point"
                })

                this.setState({ data });
                this.props.map.add(fl);
            })
            .catch((err) => console.error(err));
    }
    render() {
        return null
    }
}