import { Component } from "@angular/core";
import { ProfileUiComponent } from "./common-ui/profile-ui/profile-ui.component";
import { JsonPipe } from "@angular/common";
import { RouterModule } from "@angular/router";

 
@Component({
    selector: "app-root",
    standalone: true,
    imports: [ProfileUiComponent, RouterModule],
    providers: [JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}