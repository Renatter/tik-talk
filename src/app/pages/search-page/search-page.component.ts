import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ProfileUiComponent } from "../../common-ui/profile-ui/profile-ui.component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileUiComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

    profileService = inject(ProfileService)

    profiles: IProfile[] = []

    constructor() {
        this.profileService.getProfileService().subscribe((x) => {
            this.profiles = x
        })
    }
}
