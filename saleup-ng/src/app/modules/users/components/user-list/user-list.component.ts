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
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getRoles();
    this.initUserForm();
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
    this.userService.createUser(this.getUserPayload())
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.getUsers();
          this.userForm.reset();
          this.userDialog = false;
        }
        this.loading = false;
      })
  }

  getUserPayload(): FormData {
    const formData = new FormData();
    const val = this.userForm.value;
    if (this.user) {
      formData.append('userId', val['userId']);
    }
    formData.append('username', val['username']);
    formData.append('password', val['password']);
    formData.append('passwordConfirm', val['passwordConfirm']);
    formData.append('phone', val['phone']);
    formData.append('email', val['email']);
    formData.append('roleId', val['roleId']);
    return formData;
  }

  openNew() {
    this.userDialog = true;
  }

  deleteSelectedUsers() {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onSelectImage(e: any) {
    console.log(e)
  }

}
