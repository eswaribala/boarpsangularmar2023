import {Item, MenuItem, SubItem} from "./menuitem";
import {BreadcrumbMenuItem} from "./breadcrumbmenuitem";

export const menuData:MenuItem[]=[new MenuItem('Bank Account',[new Item('Create','pi pi-fw pi-plus','BankAccount/Create'),
  new Item('Edit','pi pi-fw pi-user-edit','BankAccount/Edit'),
  new Item('View','pi pi-fw pi-info','BankAccount/View'),
  new Item('Delete','pi pi-fw pi-trash','BankAccount/Delete'),
  new Item('Transfer Money','pi pi-fw pi-send','BankAccount/Transfer'),
  new Item('Deposit Money','pi pi-fw pi-pound','BankAccount/Deposit'),
  new Item('Withdraw Money','pi pi-fw pi-pound','BankAccount/Withdraw'),
  new Item('Direct Debit','pi pi-fw pi-plus','BankAccount/DirectDebit')],'BankAccount'),

  new MenuItem('System Account',[new Item('Create','pi pi-fw pi-plus',
    'SystemAccount/Create'),
    new Item('Edit','pi pi-fw pi-user-edit','SystemAccount/Edit'),
    new Item('View','pi pi-fw pi-info','SystemAccount/View'),
    new Item('Delete','pi pi-fw pi-trash','SystemAccount/Delete')

  ],'SystemAccount')


]


export const breadCrumbData:BreadcrumbMenuItem[]=[new BreadcrumbMenuItem('Home',''),new BreadcrumbMenuItem('Bank Account',''),
  new BreadcrumbMenuItem('Create','')]
