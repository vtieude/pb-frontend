import { saleOverview_GetOverviewUsersSales } from "src/app/services/sale-service/__generated__/saleOverview";

export class  Product implements  saleOverview_GetOverviewUsersSales{
    productClass: string | undefined;
    productInitial: string | undefined;
    UserName!: string;
    UserRole!: string;
    UserEmail!: string | null;
    TotalSaledProduct!: number;
    EarningMoney!: number;
    constructor() {
      }
    __typename!: "OverviewUserSaleDto";
}

export const TopSelling: Product[] = [
    {
        productClass: 'btn-info',
        productInitial: 'E',
        UserName: 'Elite Admin',
        UserEmail: 'Single Use',
        UserRole: 'Nhan Vien',
        TotalSaledProduct: 356,
        EarningMoney: 2850.0,
        __typename!: "OverviewUserSaleDto"
    },
    {
        productClass: 'btn-orange',
        productInitial: 'M',
        UserName: 'Elite Admin',
        UserEmail: 'Single Use',
        UserRole: 'Nhan Vien',
        TotalSaledProduct: 356,
        EarningMoney: 2850.0,
        __typename!: "OverviewUserSaleDto"
    },
    {
        productClass: 'btn-success',
        productInitial: 'M',
        UserName: 'Elite Admin',
        UserEmail: 'Single Use',
        UserRole: 'Nhan Vien',
        TotalSaledProduct: 356,
        EarningMoney: 2850.0,
        __typename!: "OverviewUserSaleDto"
    },
    {
        productClass: 'btn-purple',
        productInitial: 'A',
        UserName: 'Elite Admin',
        UserEmail: 'Single Use',
        UserRole: 'Nhan Vien',
        TotalSaledProduct: 356,
        EarningMoney: 2850.0,
        __typename!: "OverviewUserSaleDto"
    },

]