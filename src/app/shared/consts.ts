import { gql } from "apollo-angular";
import { DocumentNode } from "graphql";
import { RouteInfo } from "./sidebar/sidebar.metadata";

export class RouteTitleNavigationVi {
  public static TitleManage: string = "quan-li";
  public static TitleStaff: string = "nhan-vien";
  public static TitleProduct: string = "san-pham";
  public static TitleAddProduct: string = "tao-moi-san-pham";
  public static TitleEditProduct: string = "sua-san-pham";
  public static TitleProfile: string = "thong-tin-ca-nhan";
  public static TitleSale: string = "ban-hang";
  public static TitleManageSale: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleSale;
  public static TitleManageProfile: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleProfile;
  public static TitleManageEditProduct: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleEditProduct;
  public static TitleManageUser: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleStaff;
  public static TitleManageProduct: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleProduct;
  public static TitleManageAddProduct: string = "/" + RouteTitleNavigationVi.TitleManage + "/" + RouteTitleNavigationVi.TitleAddProduct;
   // Dash board List Sales off User view
   public static SuperAdminListUserSalesOffDashboard : string[] = [
    "Name User",
    "UserEmail",
    "Role", 
    "Sales",
    "Earnings"
    ]
    public static AdminListUserSalesOffDashboard : string[] = [
        "Tên Nhân Viên",
        "Email",
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
          path: RouteTitleNavigationVi.TitleManageProfile,
          title: 'Quản Lí Cá Nhân',
          icon: 'mdi mdi-dots-horizontal',
          class: '',
          extralink: false,
          submenu: []
        },
        {
          path: RouteTitleNavigationVi.TitleManageSale,
          title: 'Quản lí bán hàng',
          icon: 'mdi mdi-message-bulleted',
          class: '',
          extralink: false,
          submenu: []
        },
  ]

  public static MenuItemSuperAdmin: RouteInfo[] = [
      {
          path: RouteTitleNavigationVi.TitleManageUser,
          title: 'Quản lí nhân viên',
          icon: 'mdi mdi-view-carousel',
          class: '',
          extralink: false,
          submenu: []
      },
      {
        path: RouteTitleNavigationVi.TitleManageProduct,
        title: 'Quản lí sản phẩm',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '',
        title: 'Báo cáo doanh số',
        icon: 'mdi mdi-poll',
        class: 'nav-small-cap',
        extralink: false,
        submenu: []
      },
  ]
  public static UnusedMenuItem: RouteInfo[] = [
      {
        path: '/quan-li/accordion',
        title: 'Accordion',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/alert',
        title: 'Alert',
        icon: 'mdi mdi-message-bulleted',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/carousel',
        title: 'Carousel',
        icon: 'mdi mdi-view-carousel',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/dropdown',
        title: 'Dropdown',
        icon: 'mdi mdi-arrange-bring-to-front',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/modal',
        title: 'Modal',
        icon: 'mdi mdi-tablet',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/pagination',
        title: 'Pagination',
        icon: 'mdi mdi-backburger',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/poptool',
        title: 'Popover & Tooltip',
        icon: 'mdi mdi-image-filter-vintage',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/progressbar',
        title: 'Progressbar',
        icon: 'mdi mdi-poll',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/rating',
        title: 'Ratings',
        icon: 'mdi mdi-bandcamp',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/tabs',
        title: 'Tabs',
        icon: 'mdi mdi-sort-variant',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/timepicker',
        title: 'Timepicker',
        icon: 'mdi mdi-calendar-clock',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/buttons',
        title: 'Button',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/quan-li/card',
        title: 'Card',
        icon: 'mdi mdi-arrange-bring-forward',
        class: '',
        extralink: false,
        submenu: []
      }
    ];
}


export class Consts {
    // Part 1: User Role Permission
   
    public static HomePageNavigation: string = "/dashboard";
    // Title
    public static TitleDelete: string = "Xoá";
    public static TitleEdit: string = "Sửa";
    public static TitleCancel: string = "Huỷ";
    public static TitleSuccess: string = "Thành công";
    public static ManageUser =  "Quản lí nhân viên";
    public static ManageProduct =  "Quản lí sản phẩm";
    public static ManageAddProduct =  "Tạo mới sản phẩm";
    public static ManageEditProduct =  "Thay đổi sản phẩm";
    public static ManageProfile =  "Quản lí cá nhân";
    public static ManageSale =  "Quản lí bán hàng";
    public static ConfirmCancel = "Bạn muốn huỷ?";
    
}

export class TitleManagerStaff {
      public TitleCreateNew: string = "Tạo mới";
      public TitleStaffConfirm: string = "Tạo mới";
      public TitleStaffEditBtn: string = "Sửa";
      public TitleStaffUserName: string = "Tên nhân viên";
      public TitleStaffErrorUserNameRequired: string = "Tên nhân viên bắt buộc nhập";
      public TitleStaffErrorEmailRequired: string = "Email bắt buộc nhập";
      public TitleCreateNewStaffPassword: string = "Mật khẩu";
      public TitleCreateNewStaffPasswordAgain: string = "Nhập lại mật khẩu";
      public TitleCreateNewStaffPasswordNotMatch: string = "Mật khẩu không giống nhau";
      public TitleConfirmDeleteUser: string = "Xác nhận";
      public TitleConfirmDeleteUserContent: string = "Bạn muốn xoá tài khoản";
      public TitleCreateNewStaffErrPasswordReq: string = "Mật khẩu bắt buộc nhập";
      public TitleStaffPhoneNumber: string = "Số điện thoại";
      public TitleStaffRole: string = "Chức vụ";
      public TitleCreateNewStaff: string = "Tạo mới nhân viên";
      public TitleEditStaff: string = "Chỉnh sửa thông tin nhân viên";
      public TitleListStaff: string = "Danh sách nhân viên";
      public TitleTableColumnsListStaff: string[] = [ "Tên Nhân Viên",
      "Email",
      "Chức vụ", 
      "Số điện thoại"];
      public TitleDelete: string = "Xoá";
      public TitleCancelled: string = "Huỷ";
}
export class TitleManagerProfile {
  public TitleProfile: string = "Thông tin cá nhân";
  public TitleStaffUserName: string = "Tên nhân viên";
  public TitleCreateNewStaffPassword: string = "Mật khẩu";
  public TitleCreateNewStaffPasswordAgain: string = "Nhập lại mật khẩu";
  public TitleStaffPhoneNumber: string = "Số điện thoại";
  public TitleStaffRole: string = "Chức vụ";
  public TitleStaffEditBtn: string = "Sửa";
  public TitleCreateNewStaffPasswordNotMatch: string = "Mật khẩu không giống nhau";
  public TitleCreateNewStaffErrPasswordReq: string = "Mật khẩu bắt buộc nhập";
  public TitleStaffErrorUserNameRequired: string = "Tên nhân viên bắt buộc nhập";
}

export class TitleManagerProduct {
  public TitleCreateNew: string = "Tạo mới";
  public TitleProductConfirm: string = "Tạo mới";
  public TitleProductEditBtn: string = "Sửa";
  public TitleProductProductName: string = "Tên sản phẩm";
  public TitleProductCategory: string = "Loại sản phẩm";
  public TitleProductKey: string = "Mã sản phẩm";
  public TitleCreateNewProduct: string = "Tạo mới sản phẩm";
  public TitleManageListProduct: string = "Danh sách sản phẩm";
  public TitleProductPrice: string  = "Giá mua vào (VND)";
  public TitleProductFieldRequiredErr = "Yêu cầu nhập";
  public TitleProductSellingPrice: string = "Giá bán ra (VND)";
  public TitleProductDescription: string = "Mô tả";
  public TitleTotalProduct: string = "Số lượng sản phẩm";
  public TitleMinProductPrice: string = "Nhập giá lớn hơn 0 VND";
  public TitleMaxProductPrice: string = "Nhập giá bé hơn 100 000 000 000 000 VND";
  public TitleTableColumnsListProduct: string[] = [ "Tên sản phẩm",
  "Lọai sản phẩm",
  "Nhà cung cấp",
  "Giá mua vào", 
  "Giá bán ra",
  "Số lượng"];
  public TitleDelete: string = "Xoá";
  public TitleCancelled: string = "Huỷ";
}

export class GraphqlQuery{
  public static UserMutationEditUser = gql`mutation editUser($input:  EditUserModel!){
    editUser(input: $input) {
      id
    }
  }`;

  public static UserMutationEditProfile = gql`mutation editProfile($input:  EditUserModel!){
    editProfile(input: $input) {
      id
    }
  }`;

  public static UserMutationDeleteUser: DocumentNode = gql`mutation deleteUser($userId: Int!) {
    deleteUser(userId: $userId)
  }`;
  public static  UserNewUserMutation: DocumentNode = gql`
    mutation createUser($input:  NewUser!) {
      createUser(input: $input ) {
          id
        }
      }
      `;
  public static AuthMutationLogin: DocumentNode = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password ) {
      id
      token
      role
      userName
    }
  }
`;

  public static AuthQueryGetMe: DocumentNode = gql`query getMe {
    Me {
      id
      role
      userName
    }
  }`;
  public static UserQueryGetAllUser: DocumentNode = gql`query getAllUsers {
    GetAllUsers {
      id
      Username
      Email
      RoleLabel
      Role
      Active
      PhoneNumber
    }
  }`;

  public static UserQueryGetProfile: DocumentNode = gql`query getProfile {
    GetProfile {
      id
      Username
      Email
      RoleLabel
      Role
      Active
      PhoneNumber
    }
  }`;

  public static SaleQueryGetSaleOverview = gql`query saleOverview($fitler: OverviewUserSaleFilter, $page: Pagination) {
    GetOverviewUsersSales(fitler:  $fitler, page: $page) {
      UserName
      UserRole
      UserEmail
      TotalSaledProduct
      EarningMoney
    }
  }`;

  // Product
 
  public static ProductQueryGetAllProducts = gql`
  query getProducts {
    GetAllProducts{
      id
      name
      category
      price
      sellingPrice
      number
      description
      imageUrl
    }
  }`;
  public static ProductMutationCreateNew: DocumentNode = gql`
  mutation createProduct($input:  ProductInputModel!) {
    createNewProduct(input: $input) {
      id
    }
  }
`;

public static ProductMutationDeleteProduct: DocumentNode = gql`
  mutation deleteProduct($productId: Int!) {
    deleteProduct(productId: $productId)
  }
`;

public static ProductMutationEditProduct: DocumentNode = gql`
  mutation editProduct($product: ProductInputModel!) {
    editProduct(input: $product)
  }
`;

public static ProductQueryGetProductDetail = gql`
query getProductDetail($id: Int!) {
  GetProductDetail(id: $id){
    id
    name
    category
    price
    sellingPrice
    number
    description
    productKey
    imageUrl
  }
}`;


public static HelperMutationUploadFile: DocumentNode = gql`
  mutation uploadFile($image: ProfileImage!) {
    uploadFile(input: $image) 
  }
`;
}
