import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService }    from '../_core/notification.service';
import { UserService }            from './service';
import { User }                   from './model';

@Component({
  selector: 'am-user-form',
  template: require('./form.component.pug')
})
export class UserFormComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  userId: string;
  user: User;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService) {
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (!this.userId) {
      this.user = new User();
    } else {
      this._loadUser();
    }
  }

  _loadUser(): void {
    this.isLoading = true;
    this.userSrvc
      .getUser(this.userId)
      .subscribe(
        user => this.user = user,
        err => {
          this.ntfsSrvc.error('Unable to load user', err);
          this.router.navigate(['/users']);
        },
        () => this.isLoading = false
      );
  }

  saveUser(): void {
    this.isSaving = true;
    let fn = this.userId ? 'updateUser' : 'createUser';
    this.userSrvc[fn](this.user)
      .subscribe(
        () => {
          this.ntfsSrvc.info(`User ${this.userId ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/users']);
        },
        () => this.ntfsSrvc.error('Unable to save user'),
        () => this.isSaving = false
      );
  }
}
