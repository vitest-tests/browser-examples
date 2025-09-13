import { Component, input } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `<div>
    <h1>Hello, {{ name() }}!</h1>
  </div>`,
})
export class HelloWorld {
  name = input<string>();
}
