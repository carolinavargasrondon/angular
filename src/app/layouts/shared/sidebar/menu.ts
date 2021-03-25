import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/'
    },
   
    {
        id: 15,
        label: 'MENUITEMS.KANBAN.TEXT',
        icon: 'ri-artboard-2-line',
        link: '/kanban-board'
    },
  
    {
        id: 17,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 18,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'ri-account-circle-line',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/pages/login-1',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/pages/register-1',
                parentId: 18
            },
            {
                id: 21,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/pages/recoverpwd-1',
                parentId: 18
            },
            {
                id: 22,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 18
            }
        ]
    },
    
    {
        id: 49,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'ri-eraser-fill',
        badge: {
            variant: 'danger',
            text: '6'
        },
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 49
            },
            {
                id: 53,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 49
            },
            {
                id: 54,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 49
            },
            {
                id: 55,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 49
            },
            {
                id: 56,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 49
            },
        ]
    },
    {
        id: 57,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'ri-table-2',
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/ruta',
                parentId: 57
            },
            {
                
                id: 59,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: '/tables/advanced',
                parentId: 57
            },
            {
                id: 60,
                label: 'Acciones',
                link: '/tables/accion',
                parentId: 57
            }
        ]
    },
  

];
