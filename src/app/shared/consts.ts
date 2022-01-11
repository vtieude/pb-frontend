import { RouteInfo } from "./sidebar/sidebar.metadata";

export class Consts {
    // Part 1: User Role Permission
    // Dash board List Sales off User view
    public static SuperAdminListUserSalesOffDashboard : string[] = [
        "Name User",
        "UserId",
        "Role", 
        "Sales",
        "Earnings"
    ]
    public static AdminListUserSalesOffDashboard : string[] = [
         "Tên Nhân Viên",
         "Mã Số Nhân Viên",
         "Chức vụ", 
         "Tổng Sản phẩm đã bán",
         "Doanh thu"
    ]
    // List menu

    public static MenuItemNormalUser:  RouteInfo[] = [
        {
          path: '',
          title: 'Personal',
          icon: 'mdi mdi-dots-horizontal',
          class: 'nav-small-cap',
          extralink: true,
          submenu: []
        },
      ];
    public static MenuItemStaff: RouteInfo[] = [
        {
            path: '/dashboard',
            title: 'Dashboard',
            icon: 'mdi mdi-gauge',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '',
            title: 'Quản Lí',
            icon: 'mdi mdi-dots-horizontal',
            class: 'nav-small-cap',
            extralink: true,
            submenu: []
          },
          {
            path: '',
            title: 'Quản Lí Cá Nhân',
            icon: 'mdi mdi-dots-horizontal',
            class: 'nav-small-cap',
            extralink: true,
            submenu: []
          },
          {
            path: '',
            title: 'Quản lí bán hàng',
            icon: 'mdi mdi-dots-horizontal',
            class: 'nav-small-cap',
            extralink: true,
            submenu: []
          },
    ]

    public static MenuItemSuperAdmin: RouteInfo[] = [
        {
            path: '',
            title: 'Quản lí nhân viên',
            icon: 'mdi mdi-dots-horizontal',
            class: 'nav-small-cap',
            extralink: true,
            submenu: []
          },
          {
            path: '',
            title: 'Báo cáo doanh số',
            icon: 'mdi mdi-dots-horizontal',
            class: 'nav-small-cap',
            extralink: true,
            submenu: []
          },
    ]
    public static UnusedMenuItem: RouteInfo[] = [
        {
          path: '/component/accordion',
          title: 'Accordion',
          icon: 'mdi mdi-equal',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/alert',
          title: 'Alert',
          icon: 'mdi mdi-message-bulleted',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/carousel',
          title: 'Carousel',
          icon: 'mdi mdi-view-carousel',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/dropdown',
          title: 'Dropdown',
          icon: 'mdi mdi-arrange-bring-to-front',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/modal',
          title: 'Modal',
          icon: 'mdi mdi-tablet',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/pagination',
          title: 'Pagination',
          icon: 'mdi mdi-backburger',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/poptool',
          title: 'Popover & Tooltip',
          icon: 'mdi mdi-image-filter-vintage',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/progressbar',
          title: 'Progressbar',
          icon: 'mdi mdi-poll',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/rating',
          title: 'Ratings',
          icon: 'mdi mdi-bandcamp',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/tabs',
          title: 'Tabs',
          icon: 'mdi mdi-sort-variant',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/timepicker',
          title: 'Timepicker',
          icon: 'mdi mdi-calendar-clock',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/buttons',
          title: 'Button',
          icon: 'mdi mdi-blur-radial',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: '/component/card',
          title: 'Card',
          icon: 'mdi mdi-arrange-bring-forward',
          class: '',
          extralink: false,
          submenu: []
        }
      ];
}
