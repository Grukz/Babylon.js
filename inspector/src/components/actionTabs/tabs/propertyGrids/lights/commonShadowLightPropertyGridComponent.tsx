import * as React from "react";
import { Observable, IShadowLight } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LineContainerComponent } from "../../../lineContainerComponent";
import { CheckBoxLineComponent } from "../../../lines/checkBoxLineComponent";
import { FloatLineComponent } from "../../../lines/floatLineComponent";

interface ICommonShadowLightPropertyGridComponentProps {
    light: IShadowLight,
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>
}

export class CommonShadowLightPropertyGridComponent extends React.Component<ICommonShadowLightPropertyGridComponentProps> {
    constructor(props: ICommonShadowLightPropertyGridComponentProps) {
        super(props);
    }

    render() {
        const light = this.props.light;

        return (
            <LineContainerComponent title="SHADOWS">
                <CheckBoxLineComponent label="Shadows enabled" target={light} propertyName="shadowEnabled" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                <FloatLineComponent label="Shadows near plane" target={light} propertyName="shadowMinZ" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                <FloatLineComponent label="Shadows far plane" target={light} propertyName="shadowMaxZ" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
            </LineContainerComponent>
        );
    }
}