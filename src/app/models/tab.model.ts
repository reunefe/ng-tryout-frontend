export class Tab {
  label: string;
  path: string;
  creationComponent: any;

  constructor(label: string, path: string, creationComponent?: any) {
    this.label = label;
    this.path = path;
    this.creationComponent = creationComponent;
  }
}
