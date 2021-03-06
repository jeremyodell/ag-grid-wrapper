import { ViewEncapsulation, Component} from "@angular/core";
import { AgRendererComponent } from "ag-grid-ng2";
@Component({
  selector: 'row-action-menu',
  templateUrl: 'app/components/table/row-action-menu/row-action-menu-tpl.html',
  encapsulation: ViewEncapsulation.None
})
export class RowActionMenuComponent implements AgRendererComponent {
  private params:any;
  public menuItems: any;

  agInit(params: any): void {
    this.params = params;
    this.menuItems = params.colDef.data;
  }

  public onClick = (method: any) : void =>{
    method(this.params.node.data);
  }

  public isDisabled = (method: any) : boolean => {
    if(method){
      return method(this.params.node.data);
    }
    return false;
  }
}
