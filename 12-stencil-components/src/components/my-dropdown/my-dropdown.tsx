import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'my-dropdown',
    styleUrl: 'my-dropdown.css',
    shadow: true
})
export class MyDropdown {

    @Prop() label: string;
    @State() visible: boolean = false;
    @Event() visibilityChange: EventEmitter;

    render() {
        return (
            <div class="dropdown">
                <button onClick={() => this.toggle()} class="toggle">{this.label}</button>
                
                {this.visible
                    ? <div class="content"><slot></slot></div>
                    : <div></div>
                }
                
            </div>
        );
    }

    toggle() {
        this.visible = !this.visible;
        this.visibilityChange.emit(this.visible);
    }

}