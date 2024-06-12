import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { CreditLogList } from "./creditLog/CreditLogList";
import { CreditLogCreate } from "./creditLog/CreditLogCreate";
import { CreditLogEdit } from "./creditLog/CreditLogEdit";
import { CreditLogShow } from "./creditLog/CreditLogShow";
import { PaymentTypeList } from "./paymentType/PaymentTypeList";
import { PaymentTypeCreate } from "./paymentType/PaymentTypeCreate";
import { PaymentTypeEdit } from "./paymentType/PaymentTypeEdit";
import { PaymentTypeShow } from "./paymentType/PaymentTypeShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { TaxList } from "./tax/TaxList";
import { TaxCreate } from "./tax/TaxCreate";
import { TaxEdit } from "./tax/TaxEdit";
import { TaxShow } from "./tax/TaxShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VariantList } from "./variant/VariantList";
import { VariantCreate } from "./variant/VariantCreate";
import { VariantEdit } from "./variant/VariantEdit";
import { VariantShow } from "./variant/VariantShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BusinessManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="CreditLog"
          list={CreditLogList}
          edit={CreditLogEdit}
          create={CreditLogCreate}
          show={CreditLogShow}
        />
        <Resource
          name="PaymentType"
          list={PaymentTypeList}
          edit={PaymentTypeEdit}
          create={PaymentTypeCreate}
          show={PaymentTypeShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Tax"
          list={TaxList}
          edit={TaxEdit}
          create={TaxCreate}
          show={TaxShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Variant"
          list={VariantList}
          edit={VariantEdit}
          create={VariantCreate}
          show={VariantShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
