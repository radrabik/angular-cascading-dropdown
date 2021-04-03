import { Component, OnInit, VERSION } from "@angular/core";
import { ControlNodes, ManagedNodes } from "./selectors";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  // initiate list of ControlNodes & ManagedNodes
  selectedControlNodes: ControlNodes = new ControlNodes(2, "CN_2");
  controlNodes: ControlNodes[];
  managedNodes: ManagedNodes[];

  // multi-select testing
  selectedOption: number;

  ngOnInit(): void {
    this.controlNodes = this.getControlNodes();
    this.onSelect(this.selectedControlNodes.id);
  }

  onSelect(controlNodeId): void {
    this.selectedOption = 0;
    this.managedNodes = this.getManagedNodes().filter(
      item => item.controlNodeId == controlNodeId
    );
  }

  getControlNodes(): ControlNodes[] {
    return [new ControlNodes(1, "visimard1"), new ControlNodes(2, "CN_2")];
  }

  getManagedNodes(): ManagedNodes[] {
    return [
      new ManagedNodes(1, 1, "Managed Node 1_1"),
      new ManagedNodes(2, 1, "Managed Node 1_2"),
      new ManagedNodes(3, 1, "Managed Node 1_3"),
      new ManagedNodes(4, 1, "Managed Node 1_4"),
      new ManagedNodes(5, 2, "Managed Node 2_1"),
      new ManagedNodes(6, 2, "Managed Node 2_2"),
      new ManagedNodes(7, 2, "Managed Node 2_3")
    ];

    /*
    return [
     new ManagedNodes(1, 1, 'Managed Node 1_1' ),
     new ManagedNodes(2, 1, 'Managed Node 1_2' ),
      ];
   */
  }
}
