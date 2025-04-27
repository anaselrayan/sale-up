import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { PageRequest } from '@shared/models/page-request.model';
import { Table, TableModule } from 'primeng/table';
import { ToastService } from '@shared/services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { Page } from '@shared/models/page-response.mdel';
import { PermissionGroup, Role } from '@module/roles/models/role.model';
import { RoleService } from '@module/roles/services/role.service';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-role-list',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    Toast,
    ToolbarModule,
    InputTextModule,
    TextareaModule,
    DialogModule,
    InputIconModule,
    IconFieldModule,
    TranslateModule,
    PaginatorModule,
    Tree,
    Tooltip
  ],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.scss'
})
export class RoleListComponent {

  roleDialog: boolean = false;
  dialogHeader = 'Create Role';
  loading = false;
  saveLoading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;
  roleList: Role[] = [];
  role!: Partial<Role>;
  selectedRoles!: Role[] | null;
  cols!: any[];

  roleForm!: FormGroup;
  permList: TreeNode[] = [];
  selectedPerms: TreeNode[] = [];
  mode!: 'create' | 'update';

  constructor(
    private roleService: RoleService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getRoles();
    this.getPermissions();
    this.initRoleForm();
  }

  getRoles() {
    this.roleService.getAllRoles()
      .subscribe(res => {
        if (res.success) {
          this.roleList = res.data;
        }
      })
  }

  getPermissions() {
    this.roleService.getPermissionGroups()
      .subscribe(res => {
        if (res.success) {
          this.permList = this.mapPermissionsToTreeData(res.data)
        }
      })
  }

  initRoleForm() {
    this.roleForm = new FormGroup({
      roleName: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    })
  }

  onSaveRole() {
    this.saveLoading = true;
    if (this.roleForm.invalid) {
      this.toast.showWarn(this.translate.instant('REQUIRED_FIELDS_MSG'));
      return;
    }
    if (this.mode == 'create') {
      this.roleService.createRole({
        roleName: this.roleForm.value['roleName'],
        description: this.roleForm.value['description'],
        permissionsIDs: this.selectedPerms.filter(p => p.data != 'group').map(p => p.data)
      }).subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
            this.getRoles();
            this.roleForm.reset();
            this.selectedPerms = [];
            this.roleDialog = false;
          }
          else { this.toast.showError(res.message); }
          this.saveLoading = false;
        })
    } else if (this.mode == 'update' && this.role) {
      this.roleService.updateRole({
        roleId: this.role.roleId,
        roleName: this.roleForm.value['roleName'],
        description: this.roleForm.value['description'],
        permissionsIDs: this.selectedPerms.filter(p => p.data != 'group').map(p => p.data)
      }).subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
            this.getRoles();
            this.roleForm.reset();
            this.selectedPerms = [];
            this.roleDialog = false;
          }
          else { this.toast.showError(res.message); }
          this.saveLoading = false;
        })
    }
  }

  mapPermissionsToTreeData(permGroups: PermissionGroup[]) {
    return permGroups.map(group => {
        return {
            label: this.translate.instant(group.group),
            data: 'group',
            children: group.permissions.map(permission => ({
              label: this.translate.instant(permission.permName),
              data: permission.permId,
              expanded: false
            }))
        };
    });
  }

  editRole(role: Role) {
    this.mode = 'update';
    this.dialogHeader = this.translate.instant('EDIT_ROLE', {name: role.roleName});
    this.roleDialog = true;
    this.role = role;
    this.roleForm.patchValue({
      roleName: role.roleName,
      description: role.description,
    })
  }

  openNew() {
    this.mode = 'create';
    this.dialogHeader = this.translate.instant('ADD_ROLE');
    this.roleDialog = true;
  }

  deleteSelectedRoles() {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  
}
