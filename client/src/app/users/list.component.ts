import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../_core/notification.service';
import { UserService } from './service';
import { User } from './model';

@Component({
  selector: 'am-user-list',
  template: require('./list.component.pug')
})
export class UserListComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  users: User[];

  constructor(
    private router: Router,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService) {
  }

  ngOnInit(): void {
    this._loadUsers();
  }

  _loadUsers(): void {
    this.isLoading = true;
    this.userSrvc
      .getUsers()
      .subscribe(
        users => this.users = users,
        (err: Error) => this.ntfsSrvc.warningOrError('Unable to load users', err),
        () => this.isLoading = false
      );
  }

  userDetails(user: User): void {
    this.router.navigate(['/users', user.userId]);
  }

  editUser(user: User): void {
    this.router.navigate(['/users/:id/edit', { id: user.userId }]);
  }

  deleteUser(user: User): void {
    let res = confirm(`Delete ${user.name}? The user will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.userSrvc
      .deleteUser(user.userId)
      .subscribe(
        () => {
          _.remove(this.users, user);
          this.ntfsSrvc.info('User deleted successfully');
        },
        (err: Error) => this.ntfsSrvc.warningOrError('Unable to delete user', err),
        () => this.isSaving = false);
  }
}
