import { Component, Input } from '@angular/core';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ImgsUrlPipe } from '../../helpers/pipes/imgs-url.pipe';

@Component({
  selector: 'app-profile-ui',
  standalone: true,
  imports: [ImgsUrlPipe],
  templateUrl: './profile-ui.component.html',
  styleUrl: './profile-ui.component.scss'
})
export class ProfileUiComponent {
  @Input() profile!: IProfile 

}
