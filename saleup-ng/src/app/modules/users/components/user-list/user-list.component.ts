import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PageRequest } from '@shared/models/page-request.model';
import { Table, TableModule } from 'primeng/table';
import { ToastService } from '@shared/services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Avatar } from 'primeng/avatar';
import { UserService } from '@module/users/services/user.service';
import { User } from '@module/users/models/user.model';
import { PaginatorModule } from 'primeng/paginator';
import { Page } from '@shared/models/page-response.mdel';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { RoleService } from '@module/roles/services/role.service';
import { Role } from '@module/roles/models/role.model';
import { MultiSelectModule } from 'primeng/multiselect';
import { Tooltip } from 'primeng/tooltip';
import { ConfirmService } from '@shared/services/confirm.service';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    TextareaModule,
    DialogModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    TranslateModule,
    Avatar,
    Tooltip,
    PaginatorModule,
    PasswordModule,
    FileUploadModule,
    MultiSelectModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userDialog: boolean = false;
  dialogHeader = 'Create User';
  loading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;
  userList: User[] = [];
  roles: Role[] = [];
  user!: Partial<User>;
  selectedUsers!: User[] | null;
  cols!: any[];

  userForm!: FormGroup;
  mode!: 'create' | 'update';

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private toast: ToastService,
    private confirm: ConfirmService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this.userService.getUsersPage(this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.userList = res.data.content
          this.pageDetails = res.data.page
        }
      })
  }

  getRoles() {
    this.roleService.getAllRoles()
      .subscribe(res => {
        if (res.success) {
          this.roles = res.data;
        }
      })
  }

  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.getUsers();
  }

  initUserForm() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      email: new FormControl(null),
      roleId: new FormControl(null, [Validators.required])
    })
  }

  onSaveUser() {
    this.loading = true;
    if (this.userForm.invalid) {
      this.toast.showWarn(this.translate.instant('REQUIRED_FIELDS_MSG'));
      return;
    }
    if (this.mode === 'create') {
      this.userService.createUser(this.getUserPayload())
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.getUsers();
          this.userForm.reset();
          this.userDialog = false;
        } else {
          this.toast.showError(res.message)
        }
        this.loading = false;
      })
    }
    else if (this.mode === 'update') {
      this.userService.updateUser(this.getUserPayload())
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.getUsers();
          this.userForm.reset();
          this.userDialog = false;
        } else {
          this.toast.showError(res.message)
        }
        this.loading = false;
      })
    }
  }

  getUserPayload(): FormData {
    const formData = new FormData();
    const val = this.userForm.value;
    if (this.user) {
      formData.append('userId', this.user.userId + '');
    }
    formData.append('username', val['username']);
    formData.append('password', val['password']);
    formData.append('passwordConfirm', val['passwordConfirm']);
    formData.append('phone', val['phone'] || '');
    formData.append('email', val['email'] || '');
    formData.append('roleId', val['roleId']);
    return formData;
  }

  openNew() {
    this.userDialog = true;
    this.mode = 'create';
    this.dialogHeader = this.translate.instant('ADD_USER')
    this.initUserForm();
  }

  deleteSelectedUsers() {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onSelectImage(e: any) {
    console.log(e)
  }

  toggleUserLock(user: User) {
    this.userService.toggleUserLock(user.userId, !user.locked)
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.getUsers();
        }
        else {
          this.toast.showError(res.message);
        }
      })
  }

  onEditUser(user: User) {
    this.mode = 'update';
    this.user = user;
    this.dialogHeader = this.translate.instant('EDIT_USER', {name: user.username})
    this.userForm = new FormGroup({
      username: new FormControl(user.username, [Validators.required]),
      phone: new FormControl(user.phone, []),
      email: new FormControl(user.email, []),
      roleId: new FormControl([user.role.roleId], [Validators.required])
    })
    this.userDialog = true;
  }

  onDeleteUser(user: User) {
    const msg = this.translate.instant('DELETE_ALERT', {name: user.username});
    this.confirm.dialogAlert(msg, ()=> {
      this.userService.deleteUser(user.userId)
        .subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
            this.getUsers();
          }
          else {
            this.toast.showError(res.message);
          }
        })
    })
  }

}
